import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I am Derp, the king of Dorps</h2>
      <p>
        Visit my <Link to="/about">about page</Link>
      </p>
      <p>
        Need a ruler? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
