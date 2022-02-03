import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { container, light, medium, dark, heading } from './layout.module.css'
import { Helmet } from 'react-helmet'
import "@fontsource/orbitron"
import "@fontsource/roboto"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
        <meta name="google-site-verification" content="sF_11Zb-CH4HvFSdrC9KasATpODwKc9QUr8OHSZBygA" />
      </Helmet>
      <h1 className={light}>Square</h1>
      <h1 className={medium}>Square</h1>
      <h1 className={dark}>Disappear</h1>
      <main>
        <h2 className={heading}>{pageTitle}</h2>
        <section>
          {children}
        </section>
      </main>
    </div>
  )
}

export default Layout
