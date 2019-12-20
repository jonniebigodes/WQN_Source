import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';



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
