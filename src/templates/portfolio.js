import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({ pageContext, data }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <FeaturedImage src={pageContext.featured_media.source_url} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />

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
        <h3 dangerouslySetInnerHTML={{ __html: galleryItem.title }} />
        <img
          src={galleryItem.localFile.childImageSharp.fixed.src}
          alt={galleryItem.caption}
        />
        <p dangerouslySetInnerHTML={{ __html: galleryItem.caption }} />
      </div>
    ))}
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
