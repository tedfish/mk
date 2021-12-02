import React from 'react'
import Layout from '../components/layout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

import Seo from '../components/seo'
import "../styles/global.css";

const SecondPage = () => (
  <Box
        mt={8}
        pb={20}
      >
<Layout>
    <Seo title="Che Dessert" />
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item lg={3} sm={3}>
        <h1 m={5}>Che Dessert</h1>
      <p>Service options: Takeout
        Located in: King Plaza
        Address: 7101 Martin Luther King Jr Way S #102, Seattle, WA 98118
        You visited in July


        Hours:
        Open ⋅ Closes 5:30PM
        Updated by business 2 weeks ago
        Health & safety: Mask required · Staff wear masks · Staff get temperature checks · Staff required to disinfect surfaces between visits · Safety dividers at checkout · More details
        Phone: (206) 946-6570</p>
        </Grid>
        <Grid item lg={9} sm={3}>
        <h2>Menu Style</h2>
      Fine Dining
      Modern
      Take-Out
      Nutrition
      <button>Print</button>
      <div>
        <h2>Appetizers</h2>
        <ul>
          <li className="mk-name">Cheese Bread</li>
          <li className="mk-price">$2.42</li>
          <li className="mk-description">Cheese Bread lorem ipsum</li>
        </ul>
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