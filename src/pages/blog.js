import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/Layout'

import classes from './blog.module.scss'

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YYYY HH:MM")
          }
        }
      }
    }
  `)

  const postsArray = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={classes.posts}>
        {postsArray.map(({ node }) => (
          <li className={classes.post} key={Math.random()}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
              <p>{node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
