import React, { useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  margin: auto;
  height: 100%;
  display: block;
  text-align: center;
  justify-content: center;
`

const PortfolioItem = styled.div`
  height: 100%;
  width: 300px;
  padding: 16px;
  margin: auto;
  position: relative;
`

const PortfolioItemNameLink = styled(Link)`
  z-index: 1;
  text-decoration: none;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: red;
  &:hover {
    color: red;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: red;
  }
  ${PortfolioItem}:hover & {
    background-color: blue;
    opacity: 1;
  }
`
const PortfolioItemNameLinkText = styled.h2`
  display: inline-block;
  font-size: 3em;
`

const PortfolioImage = styled.img`
  max-width: 100%;
  position: absolute;

  width: 100%;
  height: 100%;
  display: none;
  ${PortfolioItemNameLink}:hover & {
    display: block;
    z-index: -5;
  }
`

const PortfolioItemsText = () => {
  const [currentStyle, setCurrentStyle] = useState({})
  const [currentTop, setCurrentTop] = useState({})
  const [currentLeft, setCurrentLeft] = useState()
  //Mouse event function testing
  function handleHover(e) {
    e.preventDefault()
    console.log("function works!")
    setCurrentStyle({})
  }
  //Mouse event function testing
  function handleLeave(e) {
    e.preventDefault()
    console.log("function works!")
    setCurrentStyle({})
  }
  //Mouse movement follow
  function mouseMovement(e) {
    e.preventDefault()
    console.log("X" + e.pageX)
    console.log("Y" + e.pageY)
    setCurrentTop({ left: e.pageX, top: e.pageY })
  }
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
                }
              }
            }
          }
        }
      `}
      render={props => (
        <PortfolioItemsWrapper onMouseMove={mouseMovement}>
          {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <PortfolioItem
              style={currentStyle}
              key={portfolioItem.node.id}
              onMouseOver={handleHover}
              onMouseOut={handleLeave}
            >
              <PortfolioItemNameLink
                to={`/portfolio/${portfolioItem.node.slug}`}
              >
                {/* <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                  <h2>{portfolioItem.node.title}</h2>
                </Link> */}
                <PortfolioImage
                  style={currentTop}
                  src={portfolioItem.node.featured_media.source_url}
                  alt="Thumbnail"
                />
                <PortfolioItemNameLinkText>
                  {portfolioItem.node.title}
                </PortfolioItemNameLinkText>
              </PortfolioItemNameLink>
            </PortfolioItem>
          ))}
        </PortfolioItemsWrapper>
      )}
    />
  )
}

export default PortfolioItemsText
