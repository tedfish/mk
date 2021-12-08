import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from './map';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Image />
          <ul>
                <li>King Plaza</li>
                <li>7101 Martin Luther King Jr Way S #102</li>
                <li>Seattle, WA 98118</li>
              </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Hours</Typography>
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
          <Typography>
          Ammenities
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
