import React from 'react'
import Layout from '../components/layout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Seo from '../components/seo'
import IconBreadcrumbs from '../components/breadcrumbMenu';
import ActionsMenu from '../components/actionsMenu';
import CardRestaurant from '../components/cardRestaurant';
import SimpleAccordion from '../components/accordionMenu';
import '../styles/global.css';
const SecondPage = () => (
  <Box
    mt={12}
  >
    <Layout>
      <Seo title="Che Dessert" />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={4} sm={12}>
            <IconBreadcrumbs />
            <CardRestaurant />
          </Grid>
          <Grid item lg={8} sm={12}>
            <ActionsMenu />
            <div className="mk-scroll">
              <SimpleAccordion />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  </Box>
)
export default SecondPage