import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// BC's Scripts below
const scriptURL = 'https://script.google.com/macros/s/AKfycbwbrIjWVJfPDC4AZGHmopV3sDXDRvrZ7BniEVP2shUn0EjJDFV9/exec'
const scriptURLBad = 'https://script.google.com/macros/s/poop/exec' //Not a Real URL, used to test errors in connection
const form = document.forms['submit-to-google-sheet']
const contactPref = form.elements["contactMethod"];
const loading = document.querySelector('.js-loading')
const callout = document.querySelector('.callout')
const callouts = document.querySelectorAll('.bs-callout') //All the Callouts
const invalidMessage = document.querySelector('.bs-callout-warning')
const validMessage = document.querySelector('.bs-callout-info')
const successMessage = document.querySelector('.bs-callout-success')
const errorMessage = document.querySelector('.bs-callout-error')
const processingMessage = document.querySelector('.bs-callout-processing')
const thanks = document.querySelector('.thanks')
const thanksOL = document.querySelector('.form-success-overlay')

const main = document.querySelector(".main")
const preload = document.querySelector(".loadingScreen")

function loadingScreen () {
    preload.classList.add('hidden');
    main.classList.remove('hidden');
}

//BC's OG Scripts:
//Function used to turn on/off visibility and requirement of form elements

function require(parentDiv,target, req) {
    req == true ? text = "Required" : text = "Not Required"
    //alert("The " + target + " is now " + text);
    t = document.getElementById(target);
    pD = document.getElementById(parentDiv)
    //req ? pD.style.display = "block" : pD.style.display = "none";
    req ? (t.setAttribute("required", ""), t.required = true, pD.style.display = "block") : (t.removeAttribute("required"), t.required = false, pD.style.display = "none");
    $(form).parsley().validate();
}

//Normalize Phone Number after allowing liberal input of US Phone Numbers:
function normalizePhone(phoneInput) {
    var phoneNum = phoneInput.value;
    var phoneRegex = /^([+]?[1]?[-.\s]?)([(]?)([2-9]\d{2})([)]?[-.\s]?)(\d{3})([-.\s]?)(\d{4})$/;
    if (phoneRegex.test(phoneNum)) {
        var normalizedNum = phoneNum.replace(phoneRegex, "$3-$5-$7");
        //alert("The formatted Phone Number is: " + normalizedNum);
        phoneInput.value = normalizedNum;
    } else {
        //alert("phone number wasn't valid! (" + normalizedNum + ")");
    }
}

function testFuck() {
    alert("fuck you");
}
//SUBMIT FORM
function changeSubmit(message,disable) {
    const button = document.getElementById('submit');
    disable ? button.disabled = true : button.disabled = false;
    button.innerHTML = message;
}

function hideAllMessages() {
    invalidMessage.classList.add('hidden')
    validMessage.classList.add('hidden')
    successMessage.classList.add('hidden')
    errorMessage.classList.add('hidden')
    processingMessage.classList.add('hidden')
}

function success(response) {
    console.log('Success!', response);
    changeSubmit("It Worked!",true);
    //alert("It fucking worked!");
    setTimeout(() => {
        hideAllMessages();
        main.classList.add('hidden')
        successMessage.classList.remove('hidden')
        thanksOL.classList.remove('hidden')
        //loading.classList.add('hidden')
    }, 500)
}

function fuckup(error) {
    console.error('Error!', error.message);
    changeSubmit("Try Again",false);
    //alert("Something Fucked up");
    setTimeout(() => {
        hideAllMessages();
        errorMessage.classList.remove('hidden')
        //loading.classList.add('hidden')
    }, 500)
}

function thankYou() {
    location.href = "thanks.html";
} 

//OG Form Scripts
function showLoadingIndicator () {
    form.classList.add('hidden')
    loading.classList.remove('hidden')
}

//Parsley Scripts
$(function () {
    $(form).parsley().on('field:validated', function () {
        var ok = $('.parsley-error').length === 0;
        callout.classList.remove('hidden');
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
    })
    .on('form:submit', function () {
        //return false; // Don't submit form for this demo
        changeSubmit("Processing...", true);
        $(form).parsley().validate();
        if ($(form).parsley().isValid())  {
            hideAllMessages();
            processingMessage.classList.remove('hidden');
            //alert("Form Data is Valid! Let's POST the Data");
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => success(response))
            .catch(error => fuckup(error))
        }
        // prevent default so the form doesn't submit. We can return true and
        // the form will be submited or proceed with a ajax request.
        event.preventDefault();
    })
});



export default () => (
    <form>
        <Row form>
            <Col>
                <FormGroup>
                    <Label for="email" hidden>Email</Label>
                    <Input tyupe="email" name="email" id="email" placeholder="your@emailaddress.com" />
                </FormGroup>
            </Col>
        </Row>

        <Row form>
            <Col md={5}>
                <FormGroup>
                    <Label for="firstName" hidden>First Name</Label>
                    <Input id="firstName" name="firstName" type="text" placeholder="First Name" required="" />
                </FormGroup>
            </Col>
            <Col md={7}>
                <FormGroup>
                    <Label for="lastName" hidden>Last Name</Label>
                    <Input id="lastName" name="lastName" type="text" placeholder="Last Name" required="" />
                </FormGroup>
            </Col>
        </Row>

        <Row form>
            <Col md={5}>
                <Label for="vehicles">How many vehicles do you own?</Label>
            </Col>
            <Col md={7}>   
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="vehicles" id="vehicles-1" value="1" required=""/>1
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="vehicles" id="vehicles-2" value="2" />2
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="vehicles" id="vehicles-3" value="3" />3
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="vehicles" id="vehicles-4" value="4" />4
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="vehicles" id="vehicles-5" value="5" />5+
                    </Label>
                </FormGroup>
            </Col>
        </Row>

        <Row form>
            <Col md={5}>
                <Label for="interest">How can we help you?</Label>
            </Col>
            <Col md={7}>   
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="interest" id="interest-1" value="1" required=""/>I want to save money on insurance.
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="interest" id="interest-2" value="2" />I want better insurance.
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="interest" id="interest-3" value="3" />I'm want personalized service.
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="interest" id="interest-4" value="4" />I'm just curious.
                    </Label>
                </FormGroup>

            </Col>
        </Row>
        <Row form>
            <Col md={5}>
                <Label for="contactMethod">How would you like to be contacted?</Label>
            </Col>
            <Col md={7}>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="contactMethod" id="contactMethod-email" value="email"
                            onchange='require("phoneGroup","phone",false);document.getElementById("phone").value ="";' required="" data-parsley-errors-container="#contactMethod_error" /> Email
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="contactMethod" id="contactMethod-phone" value="phone" onchange='require("phoneGroup","phone",true)' checked /> Phone Call
                    </Label>
                </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={5}>
                <Label for="phone">What's your phone number?</Label>
            </Col>
            <Col md={7}>
                <FormGroup>
                        <Input 
                        id="phone" name="phone" type="text"
                        placeholder="702-555-5555"
                        class="form-control input-md"
                        data-parsley-pattern="^[+]?[1]?[-.\s]?[(]?[2-9]\d{2}[)]?[-.\s]?\d{3}[-.\s]?\d{4}$" 
                        required
                        data-parsley-required-message="Must Be a valid US Phone Number" onblur="normalizePhone(this);" />
                    
                </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={12} className="text-center">
                <Button id="submit" name="submit" value="validate">Get a Quote!</Button>
            </Col>
        </Row>
  </form >
)
