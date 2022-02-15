import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const contact = ( {data} ) => {
    return (   
    <main>
        <Layout pageTitle="Kontakt">
            {data.wpPage.contactPageSettings.contactPageContent.map(content => (
                <>
                    <h1>{content.header}</h1>
                    <h2>{content.subHeader}</h2>
                </>
             ))}
        </Layout>
    </main>)
};

export const pageQuery = graphql`
query contact {
    wpPage(id: {eq: "cG9zdDoyMw=="}) {
        contactPageSettings {
          contactPageContent {
            ... on WpPage_Contactpagesettings_ContactPageContent_HeaderSection {
              fieldGroupName
              header
              subHeader
            }
          }
        }
      }
  }`;


export default contact;