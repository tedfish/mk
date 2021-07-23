import React from 'react'
import Layout from '../components/layout'
import Search from '../components/search'
import Features from '../components/features'
import Seo from '../components/seo'
// import { makeStyles } from '@material-ui/core/styles'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Easy - Useful - Fun" />
      <Search />
      <Features />
    </Layout>
  )
}
export default IndexPage