import React from 'react'
import { StaticQuery, graphql } from 'gatsby';

function WpTestD() {
  return (
    <StaticQuery
        query={graphql`
        query testQuery3 {
            wpPage(id: {eq: "cG9zdDo5"}) {
                title
                slug
              }
          } 
        `}
        render={data => (
            <main>
            <p>{data.wpPage.slug}</p>
            </main>
        )}
    />
  )
}

export default WpTestD