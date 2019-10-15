import React from "react"
import Layout from "../components/layout_scroll"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const PortfolioWrapper = styled.div`
  max-width: 90%;
  max-height: 90vh;
  margin: auto;
  margin-top: -20px;
`
const PortfolioInner = styled.div`
  margin: auto;
  padding-bottom: 50px;
`

const WorkTitle = styled.h1`
  color: #fff;
`
const WorkImage = styled.div`
  min-width: 200px;
  max-width: 500px;
  width: 50%;
  margin: auto;
`

const PortfolioText = styled.div`
  color: #fff;
`

const GalleryItem = styled.div`
  min-width: 150px;
  max-width: 300px;
  width: 50%;
  margin: auto;
`

const GalleryTitle = styled.div`
  color: #fff;
  text-align: center;
`
const GalleryCaption = styled.div`
  color: #fff;
  text-align: center;
`

export default ({ pageContext, data }) => (
  <Layout>
    <PortfolioWrapper>
      <PortfolioInner>
        <WorkTitle>{pageContext.title}</WorkTitle>
        <WorkImage>
          <Img
            fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
          />
        </WorkImage>
        <PortfolioText
          dangerouslySetInnerHTML={{ __html: pageContext.content }}
        />

        {pageContext.acf.portfolio_gallery.map(galleryItem => (
          <GalleryItem key={galleryItem.id}>
            <GalleryTitle
              dangerouslySetInnerHTML={{ __html: galleryItem.title }}
            />
            <Img fluid={galleryItem.localFile.childImageSharp.fluid} />
            <GalleryCaption
              dangerouslySetInnerHTML={{ __html: galleryItem.caption }}
            />
          </GalleryItem>
        ))}
      </PortfolioInner>
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
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            portfolio_gallery {
              title
              id
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
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
