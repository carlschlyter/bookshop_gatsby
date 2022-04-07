import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FooterSectionBox,
  FooterContent,
  FooterSectionHeader
 } from './footersection.module.css'

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
                      link {
                        target
                        url
                        title
                      }
                    }
                    sectionHeader
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_MyAccount {
                    fieldGroupName
                    sectionHeader
                    myAccountLinks {
                      header
                    }
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_CustomerService {
                    fieldGroupName
                    sectionHeader
                    customerServiceLinks {
                      header
                    }
                  }
                  ... on WpThemeOptionsFooter_Footersection_FooterContent_SocialMedia {
                    fieldGroupName
                    sectionHeader
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

    // console.log(data.wp.themeOptionsFooter.footerSection.footerContent[0].aboutUsLinks[0].link.url)

    // console.log(data.wp.themeOptionsFooter.footerSection.footerContent[0].sectionHeader)

  return (

    <Container fluid={true} className="p-0"> 
        <Row key={1} className={FooterSectionBox}>
            <Col>
                <h6 className={FooterSectionHeader}>
                {data.wp.themeOptionsFooter.footerSection.footerContent[0].sectionHeader}
                </h6>
                {data.wp.themeOptionsFooter.footerSection.footerContent[0].aboutUsLinks.map(field => ( 
                <Link to={field.link?.url}>
                    <div>{field.header}</div>
                </Link>
                ) )}
            </Col>
            <Col>
                <h6 className={FooterSectionHeader}>
                {data.wp.themeOptionsFooter.footerSection.footerContent[1].sectionHeader}
                </h6>
                {data.wp.themeOptionsFooter.footerSection.footerContent[1].myAccountLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
            <Col>
                <h6 className={FooterSectionHeader}>
                {data.wp.themeOptionsFooter.footerSection.footerContent[2].sectionHeader}
                </h6>
                {data.wp.themeOptionsFooter.footerSection.footerContent[2].customerServiceLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
            <Col>
                <h6 className={FooterSectionHeader}>
                {data.wp.themeOptionsFooter.footerSection.footerContent[3].sectionHeader}
                </h6>
                {data.wp.themeOptionsFooter.footerSection.footerContent[3].socialMediaLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
        </Row>
        <Row className={FooterSectionBox}>
            <Col>
                <div>{data.wp.themeOptionsFooter.footerSection.footerContent[4].text} </div>
            </Col>
        </Row>
        <Row className={FooterSectionBox}>
            <Col>
                {data.wp.themeOptionsFooter.footerSection.footerContent[5].cooperationsLinks.map(field => ( 
                    <div>{field.header}</div>
                ) )}
            </Col>
        </Row>
        <Row className={FooterSectionBox}>
            <Col>
                <div>{data.wp.themeOptionsFooter.footerSection.footerContent[6].text} </div>
                <div>{data.wp.themeOptionsFooter.footerSection.footerContent[7].text} </div>
            </Col>
        </Row>
    </Container>

    );
    
}

export default FooterSection