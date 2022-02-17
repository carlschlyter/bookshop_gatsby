import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const categories = ( {data} ) => {
  return (
  
    <main>
        <Layout pageTitle="Kategorier">
            {data.wpPage.categoriesPageSettings.categoriesPageContent.map(content => (
                <>
                    <h1>{content.header}</h1>
                    <h2>{content.subHeader}</h2>
                </>
             ))}
        </Layout>
    </main>
  );
};

export const pageQuery = graphql`
query categories {
    wpPage(id: {eq: "cG9zdDo3NA=="}) {
        categoriesPageSettings {
          categoriesPageContent {
            ... on WpPage_Categoriespagesettings_CategoriesPageContent_HeaderSection {
              fieldGroupName
              header
              subHeader
            }
          }
        }
      }
  }`;


export default categories;
