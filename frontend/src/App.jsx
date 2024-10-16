import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider, BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/home'

// ESLint tests (note: have not gotten it to work, rolled back library installations)
// eslint-config-react-app linting configuration requires ver 8.x, we are running ver 9.11.1-9.12,
// need to either find another configuration or make our own.
const title = 'React';
const esLintTest='test123';

// Frustrating attempts to create a router constant using new data API supporting routers; see:
// https://reactrouter.com/en/main/routers/picking-a-router
// https://reactrouter.com/en/main/routers/create-browser-router
// Attempts would variably display a blank page or 404 error on run build for the extension or sometimes display properly on run dev for local host.

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   )
// )

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Home />
      </Router>

      {/* <RouterProvider router={router} /> */}

      {/* <Home /> */}

      {/* <Button>Click me</Button>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}



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
  )
}

export default App
