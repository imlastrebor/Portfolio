import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: { name: { eq: "mainmenu" } }) {
          edges {
            node {
              items {
                title
                object_slug
                object_id
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          item => (
            <Link to={`/${item.object_slug}`} key={item.title}>
              {item.title}
            </Link>
          )
        )}
      </div>
    )}
  />
)

export default MainMenu
