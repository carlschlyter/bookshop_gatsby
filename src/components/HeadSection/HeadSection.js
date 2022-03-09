import React from 'react'
import Search from './Search'
import Navigation from '../Navigation/Navigation'
import {Container, Row, Col} from 'react-bootstrap'
import {
    headSectionContainer, 
    headSectionColumn, 
    headSectionLogo,
    headSectionNavWrap
} from './HeadSection.module.css'

const HeadSection = () => {
  return (
        <Container fluid={true} id={headSectionContainer}>
            <Row>
                <Col lg={3} className={headSectionColumn}>
                    <div id={headSectionNavWrap}>
                        <svg width="30" height="30" >
                            <path d="M0,5 30,5" stroke="#fff" stroke-width="5"/>
                            <path d="M0,14 30,14" stroke="#fff" stroke-width="5"/>
                            <path d="M0,23 30,23" stroke="#fff" stroke-width="5"/>
                        </svg>
                    </div>
                </Col>
                <Col lg={3} className={headSectionColumn}>
                    <h2 id={headSectionLogo}>Logo</h2>            
                </Col>
                <Col lg={3}>
                    <Navigation/>
                </Col>
                <Col lg={3}>
                    <Search/>            
                </Col>
            </Row>
        </Container>
  )
}

export default HeadSection