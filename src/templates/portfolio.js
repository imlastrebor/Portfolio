import React from "react"
import Layout from "../components/layout_scroll"
import styled from "styled-components"
import { graphql } from "gatsby"

const PortfolioWrapper = styled.div`
  max-width: 90%;
  max-height: 100vh;
  margin: auto;
  margin-top: -100px;
  overflow-y: scroll;
`
const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`
const PortfolioText = styled.div`
  color: #fff;
`

const GalleryTitle = styled.div`
  color: #fff;
`
const GalleryCaption = styled.div`
  color: #fff;
`
const GalleryImg = styled.img`
  max-width: 90%;
`
export default ({ pageContext, data }) => (
  <Layout>
    <PortfolioWrapper>
      <h1>{pageContext.title}</h1>
      <FeaturedImage src={pageContext.featured_media.source_url} />
      <PortfolioText
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
      />

      {console.log("------------------")}
      {console.log("------------------")}
      {console.log(
        pageContext.acf.portfolio_gallery.map(
          galleryItem => galleryItem.localFile.childImageSharp.fixed.src
        )
      )}
      {console.log("------------------")}
      {console.log(
        data.allWordpressWpPortfolio.edges.map(edge => edge.node.title)
      )}
      {console.log("------------------")}
      {console.log(
        data.wordpressWpPortfolio.acf.portfolio_gallery.map(
          galleryItem => galleryItem.localFile.childImageSharp.fixed
        )
      )}
      {console.log("------------------")}
      {console.log("------------------")}

      {/* {pageContext.acf.portfolio_gallery.map(galleryItem => (
      <Img fluid={galleryItem.localFile.childImageSharp.fluid} />
    ))} */}

      {/* {pageContext.acf.portfolio_gallery.map(galleryItem => (
      <div>
        <Img fluid={galleryItem.localFile.childImageSharp.fluid} />
      </div>
    ))} */}

      {/* {data.allWordpressWpPortfolio.edges.map(edge =>
      edge.node.acf.portfolio_gallery.map(galleryItem => (
        <div key={galleryItem.id}>
          <Img fixed={galleryItem.localFile.childImageSharp.fixed} />
        </div>
      ))
    )} */}
      {/* 
    {data.wordpressWpPortfolio.acf.portfolio_gallery.map(galleryItem => (
      <div key={galleryItem.id}>
        <Img fixed={galleryItem.localFile.childImageSharp.fixed} />
      </div>
    ))} */}

      {pageContext.acf.portfolio_gallery.map(galleryItem => (
        <div key={galleryItem.id}>
          <GalleryTitle
            dangerouslySetInnerHTML={{ __html: galleryItem.title }}
          />
          <GalleryImg
            src={galleryItem.localFile.childImageSharp.fixed.src}
            alt={galleryItem.caption}
          />
          <GalleryCaption
            dangerouslySetInnerHTML={{ __html: galleryItem.caption }}
          />
        </div>
      ))}
    </PortfolioWrapper>
  </Layout>
)

export const portfolioQuery = graphql`
  query {
    wordpressWpPortfolio {
      acf {
        portfolio_gallery {
          id
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
          acf {
            portfolio_item {
              portfolio_item_title
              portfolio_item_image {
                localFile {
                  childImageSharp {
                    fixed(width: 300, height: 300) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }

            portfolio_gallery {
              title
              id
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
    }
  }
`
