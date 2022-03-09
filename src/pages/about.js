import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const about = ( {data} ) => {
    return (   
        <Layout pageTitle="Om">
            {data.wpPage.aboutPageSettings.aboutPageContent.map(field => (
                <div>
                    <h1>{field.header}</h1>
                    <h2>{field.subHeader}</h2>
                </div>
             ))}     
        </Layout>
    )};

export const pageQuery = graphql`
query about {
    wpPage(id: {eq: "cG9zdDoxNQ=="}) {
        aboutPageSettings {
          aboutPageContent {
            ... on WpPage_Aboutpagesettings_AboutPageContent_HeaderSection {
              fieldGroupName
              header
              subHeader
            }
          }
        }
      }
  }
`


export default about;
