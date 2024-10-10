// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default function MyApp() {
  return (
    <body className="body">
      <header className="top layer">
        <h1>X/Twitter Dark Pattern Detector</h1>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
      </header>
      <div className="tabs">
        <h2 className="center-text">About Us</h2>
      </div>
      <div>
        <h2>What does this detection tool do?</h2>
        <p className="font-change">This tool detects dark patterns on X/Twitter.</p>
      </div>
      <div>
        <h2>What are dark patterns?</h2>
        <p className="font-change">"Dark patterns are tricks used in websites and apps that make you do things that you didn't mean to, like buying or signing up for something." - https://www.deceptive.design/</p>
      </div>
      <div>
        <h2>What Dark patterns does this tool detect?</h2>
        <p className="dark-pattern-types">Emotional Steering</p>
        <p className="dark-pattern-types">Infinite Scrolling</p>
        <p className="dark-pattern-types">Autoplay Videos</p>
        <p className="dark-pattern-types">Privacy Zuckering</p>
        <p className="dark-pattern-types">Engagement Notification</p>
        <p className="dark-pattern-types">Obstructing</p>
        <p className="dark-pattern-types">Promoted Tweets and Ads that Blend In</p>
      </div>
    </body>
  );
}
