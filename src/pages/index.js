import * as React from 'react'
import Test from '../components/Test'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {mainImage} from '../components/layout.module.css'
import { Container } from 'react-bootstrap'


const IndexPage = ({ data }) => {
  return (
      <Layout>
        <WelcomeMessage />
        <StaticImage 
        className={mainImage}
        alt='Books and Coffee'
        src='../images/booksandcoffeecup_2560x720_blurred.png' />
      </Layout>
  )
}

 

export default IndexPage