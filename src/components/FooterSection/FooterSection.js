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
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_MyAccount {
                    fieldGroupName
                    myAccountLinks {
                      header
                    }
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_CustomerService {
                    fieldGroupName
                    customerServiceLinks {
                      header
                    }
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_SocialMedia {
                    fieldGroupName
                    socialMediaLinks {
                      header
                    }
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_GeneralInformation {
                    fieldGroupName
                    text
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_Cooperations {
                    fieldGroupName
                    cooperationsLinks {
                      header
                    }
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_CopyrightNotion {
                    fieldGroupName
                    text
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_DevelopedBy {
                    fieldGroupName
                    text
                  }
                }
              }
            }
          }
        }
    `)

    // console.log(data.wp.themeOptionsFooter.footerSection.footerContent[0].aboutUsLinks[0])

    console.log(data.wp.themeOptionsFooter.footerSection.footerContent[4].text)

  return (

    <Container fluid={true} className="p-0"> 
        <Row key={1}>
            <Col>
                {data.wp.themeOptionsFooter.footerSection.footerContent[0].aboutUsLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
            <Col>
                {data.wp.themeOptionsFooter.footerSection.footerContent[1].myAccountLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
            <Col>
                {data.wp.themeOptionsFooter.footerSection.footerContent[2].customerServiceLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
            <Col>
                {data.wp.themeOptionsFooter.footerSection.footerContent[3].socialMediaLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
        </Row>
        <Row>
            <Col>
                <div>{data.wp.themeOptionsFooter.footerSection.footerContent[4].text} </div>
            </Col>
        </Row>
        <Row>
            <Col>
                {data.wp.themeOptionsFooter.footerSection.footerContent[5].cooperationsLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
        </Row>
        <Row>
            <Col>
                <div>{data.wp.themeOptionsFooter.footerSection.footerContent[6].text} </div>
                <div>{data.wp.themeOptionsFooter.footerSection.footerContent[7].text} </div>
            </Col>
        </Row>
    </Container>

    );
    
}

export default FooterSection