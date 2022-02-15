import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const WelcomeMessage = () => {

    const data = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo5"}) {
          title
          homePageSettings {
            flexContent {
              ... on WpPage_Homepagesettings_FlexContent_HeaderSection {
                header
                subHeader
                infoText
              }
            }
          }
        }
      }
      
    `)

  return (
     <div> 
         {data.wpPage.homePageSettings.flexContent.map(flexField => (
             <div key={1}>
                <h2>{flexField.header}</h2>
                <h3>{flexField.subHeader}</h3>
                <p>{flexField.infoText}</p>
            </div>
         ))}

    </div>);
};


export default WelcomeMessage;
