import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops!" />
    <div id='oopss'>
      <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" id="img404" />
        <span id="span404">This page doesn't exist</span>
        <Link to="/"><div class="back">Back to safety</div></Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
