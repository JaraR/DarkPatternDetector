import "./App.css";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { EMLPage } from "./pages/EMLPage";

// ESLint tests (note: have not gotten it to work, rolled back library installations)
// eslint-config-react-app linting configuration requires ver 8.x, we are running ver 9.11.1-9.12,
// need to either find another configuration or make our own.
// const title = "React";
// const esLintTest = "test123";

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
      <Route path="/EMLPage" element={<EMLPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
