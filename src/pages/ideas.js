import React from 'react'
import Layout from '../components/layout'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Seo from '../components/seo'
import '../styles/global.css';
const Ideas = () => (
  <Box
    mt={12}
  >
    <Layout>
      <Seo title="Ideas" />
      <Container maxWidth="md">
        <ul>
          <li>menu item price distribution chart/averages, etc.</li>
          <li>known ingredients</li>
          <li>crowd sourced, moderated, controls,</li>
        </ul>
      </Container>
    </Layout>
  </Box>
)
export default Ideas