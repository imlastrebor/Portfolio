/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from "./MainMenu"
// import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle, keyframes } from "styled-components"

const movement = keyframes`
  /* 0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) } */
`
const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css?family=B612:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Archivo:600,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Muli:700,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700&display=swap'); */
body, html{
  font-family: "B612", sans-serif;
  margin: 0 !important;
  padding: 0 !important;
  /* overflow:hidden; */
  height:100%;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(220, 220, 220, 0.1);
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(220, 220, 220, 0.2);
    background-color: transparent;
  }
}
body{
  background-color:#000709;
  background-color:#011015;
  &::after {
    animation: ${movement}  8s steps(10) infinite;
    /* background: url(${props => props.imgUrl}); */
    content: "";
    height: 300%;
    left: -50%;
    opacity: .1;
    position: fixed;
    top: -100%;
    width: 300%;
    z-index: -2;
}
}
`

const LayoutWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20%;
  padding-top: 100px;
  height: 100%;
  @media only screen and (max-width: 624px) {
    padding: 80px 10px 0 10px;
  }
`

export default ({ children }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       wordpressWpMedia(title: { in: "grungeDark" }) {
  //         source_url
  //         title
  //         localFile {
  //           childImageSharp {
  //             fixed(width: 150, height: 300) {
  //               ...GatsbyImageSharpFixed
  //             }
  //             fluid(maxWidth: 200, quality: 100) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <div>
      {/* <BgAnimation
        fluid={data.wordpressWpMedia.localFile.childImageSharp.fluid}
      /> */}
      <GlobalStyles />
      {/* <GlobalStyles imgUrl={data.wordpressWpMedia.source_url} /> */}
      <MainMenu />
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  )
}
