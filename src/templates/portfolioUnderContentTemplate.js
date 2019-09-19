import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const AboutWrapper = styled.div`
  max-width: 90%;
  max-height: 80vh;
  overflow-y: scroll;
  margin: auto;
  padding-top: 100px;
`
const AboutTitle = styled.div`
  color: #fff;
`
const AboutContent = styled.div`
  color: #fff;
`
export default ({ pageContext }) => (
  <Layout>
    <AboutWrapper>
      <AboutTitle dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <AboutContent dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </AboutWrapper>
  </Layout>
)
