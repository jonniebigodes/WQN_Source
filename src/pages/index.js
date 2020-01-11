import React from "react"

import { Container, Row, Col } from 'reactstrap'
//import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { FaGithub } from 'react-icons/fa'

import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "../components/bcform1";
import Step2 from "../components/bcform2";
import Result from "../components/Result.js";
import Slider from '../components/slider'
import Box from '../components/box'
import { FaFingerprint, FaCommentDollar, FaCheckDouble } from 'react-icons/fa';

createStore({
    data: {}
  });

function Service(props) {
    //alert(props.ri)
    const Icon = props.ri;
    return (
        <Col>
            <Box>
                <Icon size={30} />
                <h4 className="mt-3">{props.title}</h4>
                <p className="mt-3">{props.desc}</p>
            </Box>
        </Col>
    )
}

export default () => (
    <Layout>
        <SEO title="Home" />
        <Slider />
        <Container className="py-5 how-it-works">
            <h2 className="text-center mb-4">How It Works With Us</h2>
            <Row>
                <Service title="Build a Profile" desc="Tell Us A Little Bit About Yourself and Your Auto" ri={FaFingerprint} />
                <Service title="Compare Insurance Providers" desc="We Shop Our Carriers and Provide You With a Quote Based on Your Profile" ri={FaCommentDollar} />
                <Service title="Compare Quotes" desc="We Can Easily Compare Quotes Over the Phone, Through Email, or in the Office" ri={FaCheckDouble} />
            </Row>
        </Container>

        <div className="py-5 bcform">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={10}>
                        <h3 className="text-center">Get a Personalized Quote Today!</h3>
                        <StateMachineProvider>
                            <Router>
                                <Route exact path="/" component={Step1} />
                                <Route path="/bcform2" component={Step2} />
                                <Route path="/result" component={Result} />
                            </Router>
                        </StateMachineProvider>
                    </Col>
                </Row>
            </Container>
        </div>
    </Layout>
)
