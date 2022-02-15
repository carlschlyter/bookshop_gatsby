import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const about = ( {data} ) => {
    return (   
    <main>
        <Layout pageTitle="Om">
            {data.wpPage.aboutPageSettings.flexContent.map(content => (
                <>
                    <h1>{content.header}</h1>
                    <h2>{content.subHeader}</h2>
                </>
             ))}
        </Layout>
    </main>)
};

export const pageQuery = graphql`
query MyQuery {
    wpPage(id: {eq: "cG9zdDoxMg=="}) {
      aboutPageSettings {
        flexContent {
          ... on WpPage_Aboutpagesettings_FlexContent_HeaderSection {
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
