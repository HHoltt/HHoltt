import { lazy, Suspense, useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { MediaQueryContext } from './contexts.tsx';
import { useMediaQuery } from 'react-responsive';

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./pages/Layout"));
const Kit = lazy(() => import("./pages/Kit"));

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Layout><Home /></Layout> },
    { path: "/kit", element: <Layout><Kit /></Layout> },
    { path: "*", element: <>404</> }
  ]);

  const [media, setMedia] = useState<"mobile" | "laptop" | null>(null);
  const isDesktopOrLaptop = useMediaQuery(
    { minWidth: 1224 }, undefined,
    matches => matches && setMedia("laptop")
  );
  const isTabletOrMobile = useMediaQuery(
    { maxWidth: 1224 }, undefined,
    matches => matches && setMedia("mobile")
  );

  useEffect(() => {
    if (isDesktopOrLaptop) setMedia("laptop");
    if (isTabletOrMobile) setMedia("mobile");
  }, [])

  return (
    <>
      <Suspense fallback={<>Cargando</>}>
        <MediaQueryContext.Provider value={media}>
          <RouterProvider router={router} />
        </MediaQueryContext.Provider>
      </Suspense>
    </>
  )
}

export default App
