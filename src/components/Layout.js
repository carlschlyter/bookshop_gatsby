import * as React from 'react'
import HeadSection from './headSection/HeadSection'
import FooterSection from './FooterSection/FooterSection';
import { heading } from './layout.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

const Layout = ({ pageTitle, children }) => {

  return (
    <Container fluid={true} className="p-0" >
      <Row>
        <title>{pageTitle}</title>
        <Col className="p-0">
          <HeadSection pageTitle="Äppelvikens Bokhandel"/>
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
            <main>
              {/* <h1 className={heading}>{pageTitle}</h1> */}
              <div>
              {children}
              </div>
            </main>
        </Col>
      </Row>
      <Row>
        <Col>
          <FooterSection />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout