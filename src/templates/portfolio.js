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
  overflow-y: scroll;
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

// const FeaturedImage = styled.img`
//   max-width: 300px;
//   margin: 16px 0;
//   margin: auto;
//   display: block;
// `
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
// const GalleryImg = styled.img`
//   max-width: 300px;
//   margin: auto;
//   display: block;
// `
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
            {/* <GalleryImg
              src={galleryItem.source_url}
              // src={galleryItem.localFile.childImageSharp.fixed.src}
              alt={galleryItem.caption}
            /> */}
            {/* <img src={galleryItem.localFile.childImageSharp.fluid.src} /> */}
            <Img fluid={galleryItem.localFile.childImageSharp.fluid} />
            {console.log(galleryItem.localFile.childImageSharp.fluid)}
            <GalleryCaption
              dangerouslySetInnerHTML={{ __html: galleryItem.caption }}
            />
          </GalleryItem>
        ))}

        {/* IMAGE SHOW TEST */}
        <div>
          {/* {console.log(
            data.allWordpressWpPortfolio.edges.map(portfolioWork =>
              portfolioWork.node.acf.portfolio_gallery.map(
                galleryWork => galleryWork.localFile.childImageSharp.fluid.src
              )
            )
          )} */}
          {/* {data.allWordpressWpPortfolio.edges.map(portfolioWork =>
            portfolioWork.node.acf.portfolio_gallery.map(galleryWork => (
              <Img fluid={galleryWork.localFile.childImageSharp.fluid} />
            ))
          )} */}

          {/* {console.log(
            data.wordpressWpPortfolio.acf.portfolio_gallery.map(
              galleryWork => galleryWork.localFile.childImageSharp.fixed
            )
          )} */}
          {/* {data.wordpressWpPortfolio.acf.portfolio_gallery.map(galleryWork => (
            <Img fixed={galleryWork.localFile.childImageSharp.fixed} />
          ))} */}
        </div>
        {/* --------------- */}
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
