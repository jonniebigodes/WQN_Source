import React, { useState } from 'react'
import useForm from "react-hook-form"

export default function App(props) {
    //const scriptURL = 'https://script.google.com/macros/s/AKfycbwTay7c2eGmweCIRfj6lzMloYt7oH0toBcueXRVnQ/exec' //Production URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbzpbG1CcPH5y7BGW6cJ5r2VivimxL7EQl96RBx8Cp6qRj1MW7zm/exec" //Test URL https://docs.google.com/spreadsheets/d/1CoQ2ZOVJLT9U9OkgdEvxuX3vNg-wZwLjbOEYr0Ivfhc/edit#gid=0
    const { register, handleSubmit, formState, errors } = useForm({
        mode: "onChange"
    });

    let ready = !formState.isValid;
    const [theEmail, setTheEmail] = useState("");

    //console.log(JSON.stringify(formState, null, 2));

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

    function hideShow(hide, show) {
        const hideme = document.getElementById(hide);
        const showme = document.getElementById(show);
        hideme.classList.add('hidden');
        showme.classList.remove('hidden');
    }
    let page = 1;
    function success(response) {
        console.log('Success!', response);
        page = page + 1;
        if (page > 1) {
            hideShow('form-page-1', 'form-page-2');
        }
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
        <div>
            <div id="form-page-1" className="form-page-1">
                <form onSubmit={handleSubmit(onSubmit)} id="form-1">
                    <h2>Form Page 1</h2>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="email" hidden>Email</label>
                                <input
                                    id="email" name="email" type="email" placeholder="your@emailaddress.com" className="form-control input-md"
                                    ref={register({
                                        required: true,
                                        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                                    })}
                                    onChange={e => setTheEmail(e.target.value)}
                                />
                                {errors.email && <div className="form_error">Please Enter a Valid Email address</div>}
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
                                    ref={register({
                                        required: true,
                                        pattern: /^([+]?[1]?[-.\s]?)([(]?)([2-9]\d{2})([)]?[-.\s]?)(\d{3})([-.\s]?)(\d{4})$/
                                    })}
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
                    <div className="form-group">
                        <div className="row">
                            <div className="col text-center">
                                <button
                                    id="form-nav-1"
                                    name="form-nav-1"
                                    className="btn btn-primary form-nav"
                                    type="button"
                                    disabled={ready}
                                    onClick={() => {
                                        hideShow('form-page-1', 'form-page-2');
                                    }}
                                >
                                    Get a Quote!
                            </button>
                                <button id="submit-1" name="submit-1" className="btn btn-primary" type="submit">Get a Quote!</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div id="form-page-2" className="form-page-2 hidden">
                <form onSubmit={handleSubmit(onSubmit)} id="form-2">
                    <h2>Form Page 2</h2>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="email2" hidden>Email</label>
                                <input
                                    id="email2" name="email2" type="email" placeholder="your@emailaddress.com" className="form-control input-md"
                                    disabled="true" value={theEmail}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-5">
                                <label htmlFor="dob">Date of Birth</label>
                                <input id="dob" name="dob" type="date" placeholder="MM/DD/YYYY" className="form-control input-md"
                                // ref={register}
                                />
                                {errors.dob && <div className="form_error">Please Enter a valid Date in MM/DD/YYYY format</div>}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col text-center">
                                <button id="form-nav-2" name="form-nav-2" className="btn btn-primary form-nav" type="button"
                                    onClick={() => {
                                        hideShow('form-page-2', 'form-page-1');
                                    }}
                                >
                                    Go Back
                            </button>
                                <button id="submit-2" name="submit-2" className="btn btn-primary" type="submit">Get a Quote!</button>
                            </div>
                        </div>
                    </div>
                </form >
            </div>
        </div >
    )
}