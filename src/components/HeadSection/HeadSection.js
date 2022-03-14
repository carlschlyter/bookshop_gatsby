import React from 'react'
import Search from './Search'
import Navigation from '../Navigation/Navigation'
import {Container, Row, Col} from 'react-bootstrap'
import {
    headSectionContainer, 
    headSectionColumn, 
    headSectionLogo,
    headSectionNavWrap,
    searchAndLogo
} from './HeadSection.module.css'

const HeadSection = () => {
  return (
        <Container fluid={true} className="p-0">
            <Row id={headSectionContainer}>
                <Col>
                    <Navigation/>
                </Col>
                <Col>
                    <h2 id={headSectionLogo}>Logo</h2>
                </Col>                
                <Col>
                    <Search/>    
                </Col>
                <Col>
                    <div>Shop icon</div>
                </Col>                
            </Row>
        </Container>
  )
}

export default HeadSection