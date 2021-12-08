import React from 'react'
import Layout from '../components/layout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Seo from '../components/seo'
import IconBreadcrumbs from '../components/breadcrumbMenu';
import ActionsMenu from '../components/actionsMenu';
import CardRestaurant from '../components/cardRestaurant';
import CardMenuItem from '../components/cardMenuItem';
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
              
            <h2>Street Foods</h2>
                <Grid container spacing={3}>
                  <Grid item md={6} sm={12}>
                    <CardMenuItem name="Shrimp Dumpling" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1531950110602-9c09c9102fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <CardMenuItem name="Mixed Butter Young Corn" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1559329255-2e7cb2e21ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <CardMenuItem name="Fried Rice Cake with Eggs" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1524903703642-0a6a52e5d24d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <CardMenuItem name="Spicy Mixed Rice Paper" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80" />
                  </Grid>
                </Grid>
                <h2>Entrees</h2>
                <h2>Desserts</h2>
                <h2>Beverages</h2>
              
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  </Box>
)
export default SecondPage