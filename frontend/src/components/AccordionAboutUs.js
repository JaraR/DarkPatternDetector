import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div>
        <h2>What Dark patterns does this tool detect?</h2>
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
        <Accordion>
            <AccordionSummary
                // expandIcon={<ArrowDownwardIcon />}
                // aria-controls="panel1-content"
                // id="panel1-header"
            >
                <Typography>Autoplay Videos</Typography>
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
                // expandIcon={<ArrowDownwardIcon />}
                // aria-controls="panel1-content"
                // id="panel1-header"
            >
                <Typography>Privacy Zuckering</Typography>
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
                // expandIcon={<ArrowDownwardIcon />}
                // aria-controls="panel1-content"
                // id="panel1-header"
            >
                <Typography>Engagement Notification</Typography>
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
                // expandIcon={<ArrowDownwardIcon />}
                // aria-controls="panel1-content"
                // id="panel1-header"
            >
                <Typography>Obstructing</Typography>
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
                // expandIcon={<ArrowDownwardIcon />}
                // aria-controls="panel1-content"
                // id="panel1-header"
            >
                <Typography>Promoted Tweets and Ads that Blend In</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  );
}