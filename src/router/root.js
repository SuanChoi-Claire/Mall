import { Suspense, lazy } from "react";
const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loding...</div>;
const About = lazy(() => import("../pages/AboutPage"));
const Main = lazy(() => import("../pages/MainPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
]);

export default root;
