import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
          }
        }
      }
    }
  `)
  const postsArray = data.allMarkdownRemark.edges
  console.log(postsArray[1])
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol>
        {postsArray.map(({ node }) => (
          <li key={Math.random()}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
