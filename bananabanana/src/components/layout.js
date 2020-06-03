/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import bananaLeaf from "../images/banana-leaf.svg";
import bananaLeafMiddle from "../images/banana-leaf-middle.svg";
import bananaLeafRight from "../images/banana-leaf-right.svg";
import banana from "../images/banana-logo.svg"

import Header from "./header"
import "./layout.css"
import "./comingsoon.scss"

const Layout = () => {
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
    <>
      <Header />
      <div>
        <main>
          <div div className="banana--leaf">
            <img src={bananaLeaf} width="200" height="450" alt="swinging-banana-leaf" />
          </div>
          <div div className="banana--leaf-middle">
            <img src={bananaLeafMiddle} width="200" height="450" alt="swinging-banana-leaf-middle" />
          </div>
          <div div className="banana--leaf-right">
            <img src={bananaLeafRight} width="200" height="450" alt="swinging-banana-leaf-right" />
          </div>
          <section className="main--section">
            <h1 className="main--title">
              {data.site.siteMetadata.title}
            </h1>
          </section>
        </main>
        <aside className="content--section">
          <section className="content--section--inner">
            <div className="content--section--inner-heading">coming soon</div>
            <div className="content--section--inner-subheading">get ready for them bananas</div>
            <div className="content--section--inner-info">© {new Date().getFullYear()}, Built by bananas <span><img src={banana} alt="banana" width="50" height="20" /></span></div>
          </section>
        </aside>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
