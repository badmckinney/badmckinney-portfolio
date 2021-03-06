/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.ico"
import favicon16 from "../images/favicon-16x16.png"
import favicon32 from "../images/favicon-32x32.png"
import legend from "../images/legend.jpg"

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `Aloha, My name is Brad and I am a software engineer living in Honolulu, HI. Let's work together!`,
        },
        {
          property: `og:title`,
          content: `Bad McKinney`,
        },
        {
          property: `og:description`,
          content: `Aloha, My name is Brad and I am a software engineer living in Honolulu, HI. Let's work together!`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `@_badmckinney`,
        },
        {
          name: `twitter:title`,
          content: `Bad McKinney`,
        },
        {
          name: `twitter:description`,
          content: `Aloha, My name is Brad and I am a software engineer living in Honolulu, HI. Let's work together!`,
        },
        {
          name: `twitter:image`,
          content: `${legend}`
        }
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
