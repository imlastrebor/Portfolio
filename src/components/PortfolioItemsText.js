import React, { useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  margin: auto;
  max-height: 100vh;
  overflow-y: scroll;
  display: block;
  text-align: center;
  justify-content: center;
  scroll-snap-type: y mandatory;
`
const PortfolioItems = styled.div`
  padding: 100px 0px;
  margin: 50px 0px;
  padding-bottom: 200px;
`

const PortfolioItem = styled.div`
  height: 100%;
  width: 50%;
  padding: 50px;
  margin: 10px auto;
  position: relative;
  scroll-snap-align: center;
`

const PortfolioItemNameLink = styled(Link)`
  z-index: -2;
  text-decoration: none;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: red;
  transition: 0.25s linear;
  &:hover {
    color: red;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: red;
  }
  ${PortfolioItem}:hover & {
    opacity: 1;
  }
`
const PortfolioItemNameLinkText = styled.h2`
  display: inline-block;
  font-size: 5em;
`

const PortfolioImage = styled.img`
  max-width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: -5;

  opacity: 0;
  transition: 0.5s linear;
  ${PortfolioItemNameLink}:hover & {
    opacity: 1;
  }
`

const PortfolioItemsText = () => {
  const [currentStyle, setCurrentStyle] = useState({})
  const [currentTop, setCurrentTop] = useState({})
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
    setCurrentTop({ left: e.pageX - 500, top: e.pageY + -300 })
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
        // <PortfolioItemsWrapper onMouseMove={mouseMovement}>
        <PortfolioItemsWrapper>
          <PortfolioItems>
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
          </PortfolioItems>
        </PortfolioItemsWrapper>
      )}
    />
  )
}

export default PortfolioItemsText
