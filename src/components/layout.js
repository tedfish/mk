/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'
const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: 'hsla(50, 100%, 92%, 0.5)' }}>
          <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
          <div
            style={{
              margin: `0 auto`,
              marginTop: 64,
            }}
          >
            <main>{children}</main>
            <footer style={{ paddingTop: 10 }}>
              © {new Date().getFullYear()} |  All rights reserved | Menu Kitty.
            </footer>
          </div>
        </div>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout