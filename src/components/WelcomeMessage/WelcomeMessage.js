import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
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
                }
              }
            }
          }
      }      
    `)

  return (
     <Container fluid={true} className="p-0"> 
            <Row key={1}>
                <Col id={WelcomeMessageMessageBox} >
                  {data.wpPage.homePageSettings.homePageContent.map(field => (
                    <div id={WelcomeMessageMessage}>
                      <div>
                        <div>{field.header}</div>
                        <div>{field.subHeader}</div>
                      </div>
                    </div>
                    ))}
                    <div>
                      <StaticImage 
                        className={mainImage}
                        alt='Books and Coffee'
                        src='../../images/booksandcoffeecup_2560x720_blurred.png' 
                      />
                    </div>
                </Col>
            </Row>        
    </Container>);
};


export default WelcomeMessage;
