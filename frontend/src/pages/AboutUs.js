import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h2>What does this detection tool do?</h2>
        <p>This tool detects dark patterns on X/Twitter.</p>
      </div>
      <div>
        <h2>What are dark patterns?</h2>
        <p className="font-change">"Dark patterns are tricks used in websites and apps that make you do things that you didn't mean to, 
          like buying or signing up for something." - <a href="https://www.deceptive.design">https://www.deceptive.design</a></p>
      </div>
      <div>
        <h2>What Dark patterns does this tool detect?</h2>
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

export default About;
