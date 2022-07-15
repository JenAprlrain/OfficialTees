/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "./layout.scss"
// import React, { useState } from "react"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { FaMoon } from "react-icons/fa"
// import { BiSun } from "react-icons/bi"

import DesktopHeader from "./desktop-header"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  // const [darkMode, setDarkMode] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // <GlobalContextProvider>
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <DesktopHeader />
      <div className="layout__children-container">
        {/* <button
          className="layout__theme-icon-container"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <BiSun
              className="layout__theme"
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          ) : (
            <FaMoon
              className="layout__theme"
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          )}
        </button> */}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
    // </GlobalContextProvider>
  )
}

export default Layout
