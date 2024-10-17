import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonEmoSteering from './ButtonEmoSteering';
import AccordionAboutUs from './AccordionAboutUs';
import EmoSteering from './EmoSteering';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="navigation tabs"
        >
          <Tab label="Results" {...a11yProps(0)} />
          <Tab label="About Us" {...a11yProps(1)} />
          <Tab label="Settings" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <div>
          <div>
            <p>Placeholder for Total # DP detected</p>
            <p>Dark Patterns Detected</p>
          </div>
          <div>
            <p>Emotional Steering</p>
            <p>Infinite Scrolling</p>
            <p>Autoplay Videos<Button href="./EmoSteering" variant="contained">Back to Home</Button></p>
            <p>Privacy Zuckering</p>
            <p>Engagement Notification</p>
            <p>Obstructing</p>
            <p>Promoted Tweets and Ads that Blend In</p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <section>
          <div>
            <h2>What does this detection tool do?</h2>
            <p>This tool detects dark patterns on X/Twitter.</p>
          </div>
          <div>
            <h2>What are dark patterns?</h2>
            <p className="font-change">"Dark patterns are tricks used in websites and apps that make you do things that you didn't mean to, 
              like buying or signing up for something." - <a href="https://www.deceptive.design">https://www.deceptive.design</a></p>
          </div>
          <AccordionAboutUs />
        </section>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Router>
          <ButtonEmoSteering />
          <Routes>
            <Route path='./EmoSteering' element={<EmoSteering />}/>
          </Routes>
        </Router>
        
      </TabPanel>
    </Box>
  );
}