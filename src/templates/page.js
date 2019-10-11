import React from "react"
//Change this to set scroll on/off
// "../components/layout" Scroll off
// "../components/layout_scroll" Scroll on
import Layout from "../components/layout"
import PortfolioItemsTextHorizontal2 from "../components/PortfolioItemsTextHorizontal2"

export default ({ pageContext }) => (
  <Layout>
    {/* <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
    <PortfolioItemsTextHorizontal2 />
  </Layout>
)
