import React from 'react';
import useForm from 'react-hook-form';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Form className="App" onSubmit={handleSubmit(onSubmit)}>
            <Row form>
                <Col>
                    <FormGroup>
                        <Label hidden>Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="your@emailaddress.com"
                            ref={register}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row form>
                <Col md={5}>
                    <FormGroup>
                        <Label hidden>First Name</Label>
                        <Input 
                            id="firstName" 
                            name="firstName" 
                            type="text" 
                            placeholder="First Name" 
                            ref={register({required:true})}
                        />
                    </FormGroup>
                </Col>
                <Col md={7}>
                    <FormGroup>
                        <Label hidden>Last Name</Label>
                        <Input 
                            id="lastName" 
                            name="lastName" 
                            type="text" 
                            placeholder="Last Name" 
                            ref={register({ required:true})}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row form>
                <Col md={5}>
                    <Label>How many vehicles do you own?</Label>
                </Col>
                <Col md={7}>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="vehicles" id="vehicles-1" value="1" ref={register({ required: true })}/>1
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="vehicles" id="vehicles-2" value="2" ref={register({ required: true })}/>2
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="vehicles" id="vehicles-3" value="3" ref={register({ required: true })}/>3
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="vehicles" id="vehicles-4" value="4" ref={register({ required: true })}/>4
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="vehicles" id="vehicles-5" value="5" ref={register({ required: true })}/>5+
                    </Label>
                    </FormGroup>
                </Col>
            </Row>

            <Row form>
                <Col md={5}>
                    <Label>How can we help you?</Label>
                </Col>
                <Col md={7}>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="interest" id="interest-1" value="1" required="" ref={register({ required: true })} />I want to save money on insurance.
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="interest" id="interest-2" value="2" ref={register({ required: true })} />I want better insurance.
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="interest" id="interest-3" value="3" ref={register({ required: true })} />I want personalized service.
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="interest" id="interest-4" value="4" ref={register({ required: true })} />I'm just curious.
                    </Label>
                    </FormGroup>

                </Col>
            </Row>
            <Row form>
                <Col md={5}>
                    <Label>How would you like to be contacted?</Label>
                </Col>
                <Col md={7}>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="contactMethod" id="contactMethod-email" value="email"
                                ref={register({ required: true })} /> Email
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="contactMethod" id="contactMethod-phone" value="phone" 
                            ref={register({ required: true })} /> Phone Call
                    </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={5}>
                    <Label>What's your phone number?</Label>
                </Col>
                <Col md={7}>
                    <FormGroup>
                        <Input id="phone" name="phone" type="text"
                            placeholder="702-555-5555"
                            ref={register({ required: true, pattern: /^[+]?[1]?[-.\s]?[(]?[2-9]\d{2}[)]?[-.\s]?\d{3}[-.\s]?\d{4}$/i })}
                            onblur="normalizePhone(this);" />

                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={12} className="text-center">
                    <Button id="submit" name="submit" value="validate">Get a Quote!</Button>
                </Col>
            </Row>
        </Form >
    );
}