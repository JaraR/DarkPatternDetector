import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Results = () => {
  return (
    <div>
      <div>
        <p>Placeholder for Total # DP detected</p>
        <p>Dark Patterns Detected</p>
      </div>
      <div>
        <p>Emotional Steering</p>
        render(){
          return(
            <Button component={Link} to={'/EmoSteering.js'}>Emo Steering</Button>
          );
        };
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
