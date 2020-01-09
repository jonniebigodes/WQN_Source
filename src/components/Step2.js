import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
    const { register, handleSubmit, errors } = useForm();
    const { action } = useStateMachine(updateAction);
    const onSubmit = data => {
        action(data);
        props.history.push("./Result");
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Step 2</h2>
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
        </form>
    )
}

export default withRouter(Step1);