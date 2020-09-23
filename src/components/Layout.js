import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/index.scss'
import classes from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
