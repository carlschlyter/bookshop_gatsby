import * as React from 'react'
import HeadSection from './headSection/HeadSection'
import { heading } from './layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

const Layout = ({ pageTitle, children }) => {

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <title>{pageTitle}</title>
        <Col>
          <HeadSection/>
            <main>
              <h1 className={heading}>{pageTitle}</h1>
              <div>
              {children}
              </div>
            </main>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout