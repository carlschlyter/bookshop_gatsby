import * as React from 'react'
import Navigation from './navigation/Navigation'
import { container, heading } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <title>{pageTitle}</title>
        <Navigation />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout