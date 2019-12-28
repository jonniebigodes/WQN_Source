import React from "react"

import { Container, Row, Col } from 'reactstrap'
//import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { FaGithub } from 'react-icons/fa'
import BCForm from '../components/bcformfuck'
import Slider from '../components/slider'
import Box from '../components/box'
import { FaHome } from 'react-icons/fa';

let Service = ({ title, Icon = FaHome }) => (
    <Col>
        <Box>
            <Icon size={30} />
            <h4 className="mt-3">{title}</h4>
        </Box>
    </Col>
)

export default () => (
    <Layout>
        <SEO title="Home" />
        <Slider />
        <Container className="py-5 how-it-works">
            <h2 className="text-center mb-4">How It Works With Us</h2>
            <Row>
                <Service title="Build a Profile" />
                <Service title="Compare Insurance Providers" />
                <Service title="Compare Quotes" />
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
