import * as React from 'react'
import Test from '../components/Test'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import WelcomeMessage from '../components/WelcomeMessage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {mainImage} from '../components/layout.module.css'
import { Container } from 'react-bootstrap'


const IndexPage = ({ data }) => {
  return (
      <Layout>
        <WelcomeMessage />
        <StaticImage 
        className={mainImage}
        alt='Svampbild'
        src='../images/coffee_books.png' />
      </Layout>
  )
}

 

export default IndexPage