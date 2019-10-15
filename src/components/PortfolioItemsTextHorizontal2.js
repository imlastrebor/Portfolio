import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import PortfolioWorks from "./PortfolioWorks"
import Img from "gatsby-image"

const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  position: fixed;
  bottom: 0;
  @media only screen and (max-width: 1024px) {
    /* white-space: normal;
    position: static;
    max-height: 80vh;
    max-width: 400px;
    margin: auto;
    margin-top: 50px; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -50px;
  }
`

const PortfolioItemsWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  white-space: nowrap;
  overflow-y: visible;
  overflow-x: scroll;
  display: block;
  text-align: center;
  justify-content: center;
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

  @media only screen and (max-width: 1024px) {
    overflow: auto;
    white-space: normal;
    max-height: 80vh;
    max-width: 400px;
    margin: auto;
    position: static;
  }
`
const LogoWrapper = styled.div`
  margin: auto;
  width: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Logo = styled(Img)`
  margin: auto;
  max-width: 150px;
  position: fixed;
  z-index: -99;
  opacity: 0.5;
  visibility: visible;
  transition: 0.25s linear;
  ${Wrapper}:hover & {
    opacity: 0;
  }
`
// --------------
//   Styles end
// --------------

const PortfolioItemsTextHorizontal2 = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                slug
                title
                excerpt
                content
                featured_media {
                  source_url
                  localFile {
                    childImageSharp {
                      fixed(width: 300, height: 300) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
          wordpressWpMedia(title: { in: "logo-05-png" }) {
            source_url
            title
            id
            localFile {
              childImageSharp {
                fixed(width: 150, height: 300) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={props => (
        <Wrapper>
          <LogoWrapper>
            <Logo
              fluid={props.wordpressWpMedia.localFile.childImageSharp.fluid}
            />
          </LogoWrapper>
          <PortfolioItemsWrapper>
            {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
              <PortfolioWorks
                key={portfolioItem.node.id}
                image={
                  portfolioItem.node.featured_media.localFile.childImageSharp
                    .fixed
                }
                id={portfolioItem.node.id}
                title={portfolioItem.node.title}
                link={`/works/${portfolioItem.node.slug}`}
              />
            ))}
          </PortfolioItemsWrapper>
        </Wrapper>
      )}
    />
  )
}

export default PortfolioItemsTextHorizontal2
