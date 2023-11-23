import React, { useState, useEffect, lazy } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
// import About from "./pages/About";
import Landing from "./pages/Landing";
// import Career from "./pages/Career";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
import ErrorEl from "./layout/ErrorEl";
// import Products from "./pages/Products";
// import SolutionsPage from "./pages/Solutions";
import SuspenseWrapper from "./layout/SuspenseWrapper";
import Loader from "./bits/Loader";

const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Projects = lazy(() => import("./pages/Projects"));
const Products = lazy(() => import("./pages/Products"));
const SolutionsPage = lazy(() => import("./pages/Solutions"));
const Contact = lazy(() => import("./pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorEl />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <About />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/careers",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <Career />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/contact",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/solutions",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <SolutionsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/products",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <Products />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/projects",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <Projects />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
}

export default App;
