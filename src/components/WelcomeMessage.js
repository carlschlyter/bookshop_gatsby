import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
     <div> 
         {data.wpPage.homePageSettings.homePageContent.map(field => (
             <div key={1}>
                <h2>{field.header}</h2>
                <h3>{field.subHeader}</h3>
            </div>
         ))}

    </div>);
};


export default WelcomeMessage;
