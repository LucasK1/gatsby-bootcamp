import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
