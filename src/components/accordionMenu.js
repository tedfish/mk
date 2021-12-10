import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@material-ui/core/Grid';
import CardMenuItem from '../components/cardMenuItem';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h2">Street Foods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              <CardMenuItem price="$3.99" name="Mixed Butter Young Corn" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1531950110602-9c09c9102fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
            </Grid>
            <Grid item md={6} sm={12}>
              <CardMenuItem price="$7.99" name="Shrimp Dumpling" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1559329255-2e7cb2e21ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
            </Grid>
            <Grid item md={6} sm={12}>
              <CardMenuItem price="$5.99" name="Fried Rice Cake with Eggs" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1524903703642-0a6a52e5d24d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" />
            </Grid>
            <Grid item md={6} sm={12}>
              <CardMenuItem price="$9.99" name="Spicy Mixed Rice Paper" description="Shrimp wrapped in a thin rice dough and steamed" image="https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h2">Entrees</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h2">
            Desserts
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Service options: Takeout
            Located in:
            Address:
            You visited in July
            Hours:
            Open ⋅ Closes 5:30PM
            Updated by business 2 weeks ago
            Health & safety: Mask required · Staff wear masks · Staff get temperature checks · Staff required to disinfect surfaces between visits · Safety dividers at checkout · More details
            Phone: (206) 946-6570
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
