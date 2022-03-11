import * as React from 'react'
import Test from '../components/Test'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import WelcomeMessage from '../components/WelcomeMessage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {mainImage} from '../components/layout.module.css'


const IndexPage = ({ data }) => {
  return (
      <Layout pageTitle="Äppelvikens Bokhandel">
        <WelcomeMessage />
        {/* <StaticImage 
        className={mainImage}
        alt='Svampbild'
        src='../images/coffee_books.png' /> */}
        <Test name="Äppelvikens Bokhandel" age="1"/>  
        <p>Det här är nu med i children prop för layoutkomponenten</p>
      </Layout>
  )
}

 

export default IndexPage