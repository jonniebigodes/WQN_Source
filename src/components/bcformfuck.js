import React from 'react'
//import {NormalField} from 'reactstrap-form-fields'
//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
//import ReactDOM from "react-dom";
import useForm from "react-hook-form"


export default function App(props) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwTay7c2eGmweCIRfj6lzMloYt7oH0toBcueXRVnQ/exec'
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });
    //const moreDetail = watch("contactMethod", props.contactMethod);
    //const onSubmit = data => console.log(data)
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log('Submit event', e)
        //alert(JSON.stringify(data))
        var form_data = new FormData();
        for (var key in data) {
            form_data.append(key, data[key]);
        }
        fetch(scriptURL, { method: 'POST', body: form_data })
            .then(response => success(response))
            .catch(error => fuckup(error))
    };

/*
    function changeSubmit(message, disable) {
        const button = document.getElementById('submit');
        disable ? button.disabled = true : button.disabled = false;
        button.innerHTML = message;
    }
*/
    /*
    function buzzOff(target){
        //event.preventDefault();
        //alert("buzz")
        alert(target);
        const targ = document.getElementById(target)
        const test = document.querySelector('.test')
        test.classList.remove('hidden')
    }
*/
/* 
function regToggle() {
        alert(this);
        //const button = document.getElementById('testbut');
        //var butVal = button.innerHTML;
        //alert(butVal);
        //butVal == "Register" ? button.innerHTML = "Unregister" : button.innerHTML = "Register";
        //disable ? button.disabled = true : button.disabled = false;
        //button.innerHTML = message;
    }
*/
    function success(response) {
        console.log('Success!', response);
        // changeSubmit("It Worked!",true);
        alert("Your Submission was Successful! We'll talk to you soon!");
        // setTimeout(() => {
        //     hideAllMessages();
        //     main.classList.add('hidden')
        //     successMessage.classList.remove('hidden')
        //     thanksOL.classList.remove('hidden')
        //     //loading.classList.add('hidden')
        // }, 500)
    }

    function fuckup(error) {
        console.error('Error!', error.message);
        // changeSubmit("Try Again",false);
        alert("Something Screwed Up. Please Try Again.");
        // setTimeout(() => {
        //     hideAllMessages();
        //     errorMessage.classList.remove('hidden')
        //     //loading.classList.add('hidden')
        // }, 500)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <div className="row">

                    <div className="col">
                        <label htmlFor="email" hidden>Email</label>
                        <input
                            id="email" name="email" type="email" placeholder="your@emailaddress.com" className="form-control input-md"
                            ref={register({ required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}
                        />
                        {errors.email && <div className="form_error">Email is required</div>}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">

                    <div className="col-md-5">
                        <label htmlFor="firstName" hidden>First Name</label>
                        <input
                            id="firstName" name="firstName" type="text" placeholder="First Name"
                            className="form-control input-md" ref={register({ required: true })}
                        />
                        {errors.firstName && <div className="form_error">First Name is required</div>}
                    </div>

                    <div className="col">
                        <label htmlFor="lastName" hidden>Last Name</label>
                        <input
                            id="lastName" name="lastName" type="text" placeholder="Last Name" className="form-control input-md"
                            ref={register({ required: true })}
                        />
                        {errors.lastName && <div className="form_error">Last Name is required</div>}

                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">
                    <label className="col-md-5 control-label" htmlFor="vehicles">How many vehicles do you own?</label>
                    <div className="col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="vehicles" id="vehicles-0" value="1"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="vehicles-0">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="vehicles" id="vehicles-1" value="2"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="vehicles-1">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="vehicles" id="vehicles-2" value="3"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="vehicles-2">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="vehicles" id="vehicles-3" value="4"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="vehicles-3">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="vehicles" id="vehicles-4" value="5"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="vehicles-4">5+</label>
                        </div>
                        {errors.vehicles && <div className="form_error">Number of Vehicles is required</div>}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">
                    <div className="col-md-5">
                        <label htmlFor="insured">Are you currently insured?</label>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="insured" id="insured-0" value="Yes"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="insured-0"> I'm Currently Insured</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="insured" id="insured-1" value="No"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="insured-1"> I'm NOT Insured</label>
                        </div>
                        {errors.insured && <div className="form_error">Insurance Status is required</div>}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">
                    <div className="col-md-5">
                        <label className="control-label" htmlFor="interest">How can we help you?</label>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="interest" id="interest-0" value="save money"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="interest-0">I want to save money on insurance.</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="interest" id="interest-1" value="better insurance"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="interest-1">I want better insurance.</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="interest" id="interest-2" value="personalized service"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="interest-2">I'm want personalized service.</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="interest" id="interest-3" value="just curious"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="interest-3">I'm just curious.</label>
                        </div>
                        {errors.interest && <div className="form_error">Please choose how we can help</div>}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">
                    <div className="col-md-5">
                        <label htmlFor="contactMethod">How would you like to be contacted?</label>
                    </div>
                    <div className="col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="contactMethod" id="contactMethod-email" value="email"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="contactMethod-email">Email</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="contactMethod" id="contactMethod-phone" value="phone"
                                ref={register({ required: true })} />
                            <label className="form-check-label" htmlFor="contactMethod-phone">Phone Call</label>
                        </div>
                        {errors.contactMethod && <div className="form_error">Please choose how you'd prefer to be contacted</div>}
                    </div>
                </div>
            </div>
            <div className="test hidden" id="test">
                <div>
                    <h1>fuck!</h1>
                </div>
            </div>
            <div className="form-group" id="phoneGroup">
                <div className="row">
                    <div className="col-md-5">
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="col">
                        <input id="phone" name="phone" type="text" placeholder="702-555-5555" className="form-control input-md"
                            ref={register({ required: true, pattern: /^([+]?[1]?[-.\s]?)([(]?)([2-9]\d{2})([)]?[-.\s]?)(\d{3})([-.\s]?)(\d{4})$/ })}
                            onBlur={e => {
                                const value = e.target.value;
                                const phoneRegex = /^([+]?[1]?[-.\s]?)([(]?)([2-9]\d{2})([)]?[-.\s]?)(\d{3})([-.\s]?)(\d{4})$/;
                                if (phoneRegex.test(value)) {
                                    var normalizedNum = value.replace(phoneRegex, "$3-$5-$7");
                                    //alert("The formatted Phone Number is: " + normalizedNum);
                                    e.target.value = normalizedNum;
                                } else {
                                    //alert("phone number wasn't valid! (" + normalizedNum + ")");
                                }
                            }}
                        />
                        {errors.phone && <div className="form_error">Please Enter a valid US phone number</div>}
                    </div>

                </div>
            </div>

            <div className="form-group form-group-last">
                <div className="row">
                    <div className="col text-center">
                        <button id="submit" name="submit" className="btn btn-primary" type="submit">Get a Quote!</button>
                    </div>
                </div>
            </div>
{/*
            <div className="form-group">
                <div className="row">
                    <div className="col text-center">
                        <button id="testbut" name="testbut" className="btn btn-primary" type="button"
                            onClick={fuckOff}>Test</button>
                    </div>
                </div>
            </div>
*/}
            <div className="loading js-loading hidden">
                <div className="loading-spinner">
                    <svg>
                        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" /></svg>
                </div>
            </div>
        </form>
    )
}