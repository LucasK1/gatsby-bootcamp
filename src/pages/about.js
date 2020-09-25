import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
        dolorum?
      </p>
      <p>
        Need to <Link to="/contact">contact me</Link>?
      </p>
    </Layout>
  )
}

export default AboutPage
