import React from 'react'
import { useForm } from "react-hook-form"
import { withRouter } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";


const Step1 = props => {
    //const scriptURL = 'https://script.google.com/macros/s/AKfycbwTay7c2eGmweCIRfj6lzMloYt7oH0toBcueXRVnQ/exec' //Production URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbzpbG1CcPH5y7BGW6cJ5r2VivimxL7EQl96RBx8Cp6qRj1MW7zm/exec" //Test URL https://docs.google.com/spreadsheets/d/1CoQ2ZOVJLT9U9OkgdEvxuX3vNg-wZwLjbOEYr0Ivfhc/edit#gid=0
    const { register, handleSubmit, formState, errors } = useForm({
        mode: "onChange"
    });
    const { action, state } = useStateMachine(updateAction);

    let ready = !formState.isValid;
    //const [theEmail, setTheEmail] = useState("");

    //console.log(JSON.stringify(formState, null, 2));

    const onSubmit = (payload, e) => {
        e.preventDefault();
        action(payload)
        console.log('Submit event', e)
        //alert(JSON.stringify(data))

        let allData = {
            ...state,
            data: {
                ...state.data,
                ...payload
            }
        };
        allData = allData.data;
alert(JSON.stringify(allData))

        var form_data = new FormData();
        for (var key in allData) {
            form_data.append(key, allData[key]);
        }
        fetch(scriptURL, { method: 'POST', body: form_data })
            .then(response => success(allData,response))
            .catch(error => fuckup(error))
    };

    function hideShow(hide, show) {
        const hideme = document.getElementById(hide);
        const showme = document.getElementById(show);
        hideme.classList.add('hidden');
        showme.classList.remove('hidden');
    }
    //let page = 1;
    function success(data,response) {
        console.log('Success!', response);
        // page = page + 1;
        // if (page > 1) {
        //     hideShow('form-page-1', 'form-page-2');
        // }
        //React Hook Form Wizard https://codesandbox.io/s/form-wizard-pages-kkg7m
        
        props.history.push("./result")
        // changeSubmit("It Worked!",true);
        //alert("Your Submission was Successful! We'll talk to you soon!");
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
        <div id="form-page-2" className="form-page-2">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Form Page 2</h2>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-5">
                            <label htmlFor="dob">Date of Birth</label>
                            <input id="dob" name="dob" type="date" placeholder="MM/DD/YYYY" className="form-control input-md"
                                ref={register({ required: true })}
                                defaultValue={state.data.dob}
                            />
                            {errors.dob && <div className="form_error">Please Enter a valid Date in MM/DD/YYYY format</div>}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col text-center">
                            <button
                                id="form-nav-1"
                                name="form-nav-1"
                                className="btn btn-primary form-nav hidden"
                                type="button"
                                disabled={ready}
                                onClick={() => {
                                    hideShow('form-page-1', 'form-page-2');
                                }}
                            >
                                Get a Quote!
                            </button>
                            <button id="submit" name="submit" className="btn btn-primary" type="submit">Get a Quote!</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Step1);