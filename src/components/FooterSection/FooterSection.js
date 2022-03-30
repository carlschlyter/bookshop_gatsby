import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import { FooterSectionBox,FooterContent } from './footersection.module.css'

const FooterSection = () => {

    const data = useStaticQuery(graphql`
    query {
        wp {
            themeOptionsFooter {
              footerSection {
                footerContent {
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_AppelvikensBokhandel {
                    fieldGroupName
                    aboutUsLinks {
                      header
                    }
                  }
                }
              }
            }
          }
        }
    `)
    console.log(data.wp.themeOptionsFooter.footerSection.footerContent[0].aboutUsLinks[0])
  return (

    <Container fluid={true} className="p-0"> 
        <Row key={1}>
            <Col >
                {/* {data?.WpThemeOptionsFooter?.Footersection?.FooterContent[0].aboutUsLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )} */}
                {data.wp.themeOptionsFooter.footerSection.footerContent[0].aboutUsLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
        </Row>        
    </Container>

    );
    
}

export default FooterSection