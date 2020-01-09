import React from "react"

import { Container, Row, Col } from 'reactstrap'
//import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { FaGithub } from 'react-icons/fa'
import BCForm from '../components/bcformog'
import Slider from '../components/slider'
import Box from '../components/box'
import { FaFingerprint, FaCommentDollar, FaCheckDouble } from 'react-icons/fa';


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
/*
let Service = ({ title, desc, Ri }) => (
        
    <Col>
        <Box>
            <Ri size={30} />
            <h4 className="mt-3">{title}</h4>
            <p className="mt-3">{desc}</p>
        </Box>
    </Col>
)
*/
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
        {/* 
        <div className="text-center py-5">
            <Link to="https://github.com/jeremylynch/gatsby-strapi-starter" className="btn btn-primary btn-lg">
            <FaGithub className="mr-1"/>
            View on Github
            </Link>
        </div>
        */}
        <div className="py-5 bcform">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <h3 className="text-center">Get a Personalized Quote Today!</h3>
                        <BCForm />
                    </Col>
                </Row>
            </Container>
        </div>
    </Layout>
)
