import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { AutoplaySettings } from './pages/AutoplaySettings';
import { InfiniteScrollingSettings } from './pages/InfiniteScrollingSettings';

// ESLint tests (note: have not gotten it to work, rolled back library installations)
// eslint-config-react-app linting configuration requires ver 8.x, we are running ver 9.11.1-9.12,
// need to either find another configuration or make our own.
const title = 'React';
const esLintTest = 'test123';

// Working router constant using react-router's new data API supporting routers. Uses hashrouter
// as URL handling is different for chrome extensions and  currently does not have access to a server.
// Most interactions in the extension will be handled client-side; see:
// https://reactrouter.com/en/main/routers/picking-a-router
// https://reactrouter.com/en/main/routers/create-hash-router
// https://reactrouter.com/en/main/utils/create-routes-from-elements
// https://reactrouter.com/en/main/components/link
// https://reactrouter.com/en/main/router-components/hash-router
// https://ui.shadcn.com/docs/components/button#as-child
// https://ui.shadcn.com/docs/components/button#link

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/infinitescrollingsettings" element={<InfiniteScrollingSettings />} />
            <Route path="/autoplaysettings" element={<AutoplaySettings />} />
        </>,
    ),
);

function App() {
    return (
        <>
            <RouterProvider router={router} />

            {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
        </>
    );
}

export default App;
