import React from 'react'
//import {NormalField} from 'reactstrap-form-fields'
//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import useForm from "react-hook-form"

export default function App() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbrIjWVJfPDC4AZGHmopV3sDXDRvrZ7BniEVP2shUn0EjJDFV9/exec'
    const { register, handleSubmit } = useForm()
    //const onSubmit = data => console.log(data)
    const onSubmit = (data, e) => {
        console.log('Submit event', e)
        alert(JSON.stringify(data))
        var form_data = new FormData();
            for ( var key in data ) {
                form_data.append(key, data[key]);
            }
        fetch(scriptURL, { method: 'POST', body: form_data})
        .then(response => success(response))
        .catch(error => fuckup(error))
    };

    function success(response) {
        console.log('Success!', response);
        // changeSubmit("It Worked!",true);
        alert("It fucking worked!");
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
        alert("Something Fucked up");
        // setTimeout(() => {
        //     hideAllMessages();
        //     errorMessage.classList.remove('hidden')
        //     //loading.classList.add('hidden')
        // }, 500)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group">
                <div class="row">
                    <label class="col-2 control-label" for="email" hidden>Email</label>
                    <div class="col">
                        <input id="email" name="email" type="email" placeholder="your@emailaddress.com"
                            class="form-control input-md" data-parsley-trigger="change" ref={register({required:true})} />

                    </div>
                </div>
            </div>
        
            <div class="form-group">
                <div class="row">
                    <label class="col-2 control-label" for="firstName" hidden>First Name</label>
                    <div class="col">
                        <input id="firstName" name="firstName" type="text" placeholder="First Name"
                            class="form-control input-md" ref={register({required:true})}/>

                    </div>
                    <label class="col-2 control-label" for="lastName">Last Name</label>
                    <div class="col">
                        <input id="lastName" name="lastName" type="text" placeholder="Last Name" class="form-control input-md"
                            ref={register({required:true})}/>

                    </div>
                </div>
            </div>
        
            <div class="form-group">
                <div class="row">
                    <label class="col control-label" for="vehicles">How many vehicles do you own?</label>
                    <div class="col" id="error_vehicles">
                        <label class="radio-inline" for="vehicles-0">
                            <input type="radio" name="vehicles" id="vehicles-0" value="1" ref={register({required:true})}data-parsley-errors-container="#error_vehicles" /> 1 &nbsp;&nbsp;
                        </label>
                        <label class="radio-inline" for="vehicles-1">
                            <input type="radio" name="vehicles" id="vehicles-1" value="2" ref={register({required:true})}/> 2 &nbsp;&nbsp;
                        </label>
                        <label class="radio-inline" for="vehicles-2">
                            <input type="radio" name="vehicles" id="vehicles-2" value="3" ref={register({required:true})}/> 3 &nbsp;&nbsp;
                        </label>
                        <label class="radio-inline" for="vehicles-3">
                            <input type="radio" name="vehicles" id="vehicles-3" value="4" ref={register({required:true})}/> 4 &nbsp;&nbsp;
                        </label>
                        <label class="radio-inline" for="vehicles-4">
                            <input type="radio" name="vehicles" id="vehicles-4" value="5" ref={register({required:true})}/> 5+
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="row">
                    <label class="col control-label" for="insured">Are you currently insured?</label>
                    <div class="col" id="insured_error">
                        <label class="radio-inline" for="insured-0">
                            <input type="radio" name="insured" id="insured-0" value="Yes" ref={register({required:true})}/> I'm Currently Insured
                        </label>
                        <label class="radio-inline" for="insured-1">
                            <input type="radio" name="insured" id="insured-1" value="No" ref={register({required:true})}/> I'm NOT Insured
                        </label>
                    </div>
                </div>
            </div>
        

            <div class="form-group">
                <div class="row">
                    <label class="control-label col" for="interest">How can we help you?</label>
                </div>
                <div class="row">
                    <div class="col">
                        <label class="radio-inline" for="interest-0">
                            <input type="radio" name="interest" id="interest-0" value="save money" ref={register({required:true})}/>
                            I want to save money on insurance.
                        </label>
                    </div>
                    <div class="col">
                        <label class="radio-inline" for="interest-1">
                            <input type="radio" name="interest" id="interest-1" value="better insurance" ref={register({required:true})}/>
                            I want better insurance.
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label class="radio-inline" for="interest-2">
                            <input type="radio" name="interest" id="interest-2" value="personalized service" ref={register({required:true})}/>
                            I'm want personalized service.
                        </label>
                    </div>
                    <div class="col">
                        <label class="radio-inline" for="interest-3">
                            <input type="radio" name="interest" id="interest-3" value="just curious" ref={register({required:true})}/>
                            I'm just curious.
                        </label>
                    </div>
                </div>
            </div>
        

            <div class="form-group">
                <div class="row">
                    <label class="col control-label" for="contactMethod">How would you like to be contacted?</label>
                    <div class="col" id="contactMethod_error">
                        <label class="radio-inline" for="contactMethod-email">
                            <input type="radio" name="contactMethod" id="contactMethod-email" value="email"
                                ref={register({required:true})}/>
                            Email &nbsp;&nbsp;
                        </label>
                        <label class="radio-inline" for="contactMethod-phone">
                            <input type="radio" name="contactMethod" id="contactMethod-phone" value="phone"
                                ref={register({required:true})}/>
                            Phone Call
                        </label>
                    </div>
                </div>
            </div>
        

            <div class="form-group" id="phoneGroup">
                <div class="row">
                    <label class="col control-label" for="phone">Phone Number</label>
                    <div class="col">
                        <input id="phone" name="phone" type="text" placeholder="702-555-5555" class="form-control input-md"
                            data-parsley-pattern="^[+]?[1]?[-.\s]?[(]?[2-9]\d{2}[)]?[-.\s]?\d{3}[-.\s]?\d{4}$"
                            ref={register({required:true})}/>
                    </div>
                </div>
            </div>
        

            <div class="form-group form-group-last">
                <div class="row">
                    <div class="col text-center">
                        <button id="submit" name="submit" class="btn btn-primary " value="validate">Get a Quote!</button>
                    </div>
                </div>
            </div>
        
        <div class="loading js-loading hidden">
            <div class="loading-spinner">
                <svg>
                    <circle cx="25" cy="25" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /></svg>
            </div>
        </div>
    </form>
    )
}
