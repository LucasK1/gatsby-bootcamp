import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import classes from './Footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)
  return (
    <footer className={classes.footer}> 
      <p>Created by {data.site.siteMetadata.author}, Copyright 2020</p>
    </footer>
  )
}

export default Footer
