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
            <input name="firstName" ref={register} />
            <input name="lastName" ref={register} />
            <button type="submit">Submit</button>
        </form>
    )
}
