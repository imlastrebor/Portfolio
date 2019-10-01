import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div``

const PortfolioImageWrapper = styled.div``

const PortfolioItemsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 960px;
  margin: auto;
  margin-top: 100px;
  max-height: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
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
`
const PortfolioItems = styled.div``

const PortfolioItem = styled.div`
  height: 100%;
  margin: 40px;
  display: inline-block;
  /* max-width: 90%;
  padding: 50px;
  margin: 10px auto;
  position: relative; */
`

const PortfolioItemNameLink = styled(Link)`
  display: inline-block;
  z-index: -2;
  text-decoration: none;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  transition: 0.25s linear;
  &:hover {
    color: #fff;
  }
  ${PortfolioItem}:hover & {
    opacity: 1;
  }
`
const PortfolioItemNameLinkText = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 4em;
`

const PortfolioImage = styled.img`
  max-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -5;
  opacity: 1;
`

const PortfolioItemsText = () => {
  function handleHover(e) {
    e.preventDefault()
    console.log("function works!")
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
        <Wrapper>
          <PortfolioImageWrapper>
            {props.allWordpressWpPortfolio.edges.map(edge => (
              <PortfolioImage
                key={edge.node.id}
                src={edge.node.featured_media.source_url}
                alt="Thumbnail"
              />
            ))}
          </PortfolioImageWrapper>

          <PortfolioItemsWrapper>
            <PortfolioItems>
              {props.allWordpressWpPortfolio.edges.map(
                (portfolioItem, index) => (
                  <PortfolioItem key={portfolioItem.node.id}>
                    <PortfolioItemNameLink
                      to={`/portfolio/${portfolioItem.node.slug}`}
                    >
                      {/* <PortfolioImage
                    style={currentTop}
                    src={portfolioItem.node.featured_media.source_url}
                    alt="Thumbnail"
                  /> */}
                      <div onMouseOver={e => handleHover(e, index)}>
                        {console.log(index)}
                        <PortfolioItemNameLinkText>
                          {portfolioItem.node.title}
                        </PortfolioItemNameLinkText>
                      </div>
                    </PortfolioItemNameLink>
                  </PortfolioItem>
                )
              )}
            </PortfolioItems>
          </PortfolioItemsWrapper>
        </Wrapper>
      )}
    />
  )
}

export default PortfolioItemsText
