import * as React from 'react'
import Test from '../components/Test'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import WelcomeMessage from '../components/WelcomeMessage'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Äppelvikens Bokhandel">
      <WelcomeMessage />
      <StaticImage 
      alt='Svampbild'
      src='../images/coffee_books.png' />
      <Test name="Äppelvikens Bokhandel" age="1"/>      
      <p>Det här är nu med i children prop för layoutkomponenten</p>
    </Layout>
  )
}

 

export default IndexPage