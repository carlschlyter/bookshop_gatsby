import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  WelcomeMessageMessage,
  WelcomeMessageMessageBox,
  mainImage
} from './WelcomeMessage.module.css';

const WelcomeMessage = () => {

    const data = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo5"}) {
          homePageSettings {
            homePageContent {
              ... on WpPage_Homepagesettings_HomePageContent_HeaderSection {
                fieldGroupName
                header
                subHeader
                image {
                  mediaItemUrl
                  link
                  localFile {
                    childImageSharp {
                      id
                      gatsbyImageData(formats: NO_CHANGE, width: 2560, height: 720)
                    }
                  }
                }
              }
            }
          }
        }
      }      
    `)

// console.log(data.wpPage.homePageSettings.homePageContent[0].image?.localFile)

const image = getImage(data.wpPage.homePageSettings.homePageContent[0].image?.localFile)

  return (
    
     <Container fluid={true} className="p-0"> 
            <Row key={1} className="p-0">
                <Col id={WelcomeMessageMessageBox} className={`${"m-0"} ${"p-0"}`}>
                  {data.wpPage.homePageSettings.homePageContent.map(field => (
                    
                    <div id={WelcomeMessageMessage}>
                      <div>
                        <div>{field.header}</div>
                        <div>{field.subHeader}</div>
                      </div>

                    </div>

                    ))}
                    <GatsbyImage  
                      className={mainImage}
                      fluid={true}
                      image={image}
                    />
                </Col>
            </Row>        
    </Container>
  );
};


export default WelcomeMessage;
