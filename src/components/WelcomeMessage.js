import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

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
     <Container fluid='md'> 
         {data.wpPage.homePageSettings.homePageContent.map(field => (
            <Row key={1}>
                  <Col>{field.header}</Col>
                  <Col>{field.subHeader}</Col>
            </Row>
         ))}
    </Container>);
};


export default WelcomeMessage;
