import React from 'react'
import Search from './Search'
import Navigation from '../Navigation/Navigation'
import {Container, Row, Col} from 'react-bootstrap'
import {
    headSectionContainer, 
    headSectionColumn, 
    headSectionLogo,
    headSectionNavWrap,
    searchAndLogo,
    headSectionColumns,
    headSectionSearchColumn,
    smallScreenSearchContainer,
    smallScreenSearchContainerColumn
} from './HeadSection.module.css'

const HeadSection = ({ pageTitle }) => {
  return (
        <Container fluid={true} className="p-0">
            <Row id={headSectionContainer}>
                <Col>
                    <Navigation/>
                </Col>
                <Col className={headSectionColumns}>
                    <h2 id={headSectionLogo}>{pageTitle}</h2>
                </Col>                
                <Col className={headSectionColumns} id={headSectionSearchColumn} md={6}>
                    <Search/>    
                </Col>
                <Col className={headSectionColumns}>
                    <div>Shop icon</div>
                </Col>                
            </Row>
            <Row id={smallScreenSearchContainer}>
                <Col id={smallScreenSearchContainerColumn}>
                    <div>
                        <Search/>
                    </div>                    
                </Col>
            </Row>
        </Container>
  )
}

export default HeadSection