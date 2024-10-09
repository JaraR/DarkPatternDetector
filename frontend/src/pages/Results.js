import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Results = () => {
  return (
    <div>
      <div>
        <p>Placeholder for Total # DP detected</p>
        <p>Dark Patterns Detected</p>
      </div>
      <div>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ArrowDownwardIcon />}
          // aria-controls="panel1-content"
          // id="panel1-header"
        >
          <Typography>Emotional Steering</Typography>
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
          // expandIcon={<ArrowDropDownIcon />}
          // aria-controls="panel2-content"
          // id="panel2-header"
        >
          <Typography>Infinite Scrolling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
        <p>Emotional Steering</p>
        <p>Infinite Scrolling</p>
        <p>Autoplay Videos</p>
        <p>Privacy Zuckering</p>
        <p>Engagement Notification</p>
        <p>Obstructing</p>
        <p>Promoted Tweets and Ads that Blend In</p>
      </div>
    </div>
  );
};

export default Results;
