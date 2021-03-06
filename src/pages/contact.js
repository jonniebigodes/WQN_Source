import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Link from '../components/link'
import Layout from '../components/layout'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa'
import Styled from 'styled-components'

let Cirle = Styled.div`
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

let ContactItem = ({ text, type, Icon, href }) => (
    <Col xs={6} lg={3} className="d-flex flex-column align-items-center" style={{ wordBreak: 'break-word' }}>
        <Cirle className="h-4-rem w-4-rem bg-primary-faded my-3 absolute-center rounded-circle">
            <Icon size={30} />
        </Cirle>
        <div className="text-center">
            <h6>{type}</h6>
            <span className="text-secondary">
                {href ? <Link to={href} className="reset">{text}</Link> : text}
            </span>
        </div>
    </Col>
)

export default () => (
    <Layout>
        <div className="contact-div">
            <h1>Contact Us!</h1>
            <Container>
                <Row className="py-5">

                    <ContactItem text={"2561 Wigwam Parkway\nHenderson, NV 89074"} type="Address" Icon={FaMapMarkerAlt} />
                    <ContactItem text={"contact@WeQuoteNevada.com"} href={`mailto:contact@wequotenevada.com?subject=I was just on WeQuoteNevada.com...`} type="Email" Icon={FaEnvelope} />
                    <ContactItem text={"702-344-2400"} href={`tel:702-344-2400`} type="Phone" Icon={FaPhone} />
                    <ContactItem text={"Um, you know it's 2020, right?"} type="Fax" Icon={FaFax} />
                </Row>
            </Container>
        </div>
    </Layout>
)
