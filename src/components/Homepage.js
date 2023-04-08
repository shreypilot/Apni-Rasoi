import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createBrowserRouter, RouterProvider, Outlet, useRoutes } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import useOnline from "../utils/useOnline";
import OfflinePage from '../components/OfflinePage';
const Homepage = () => {
    const isOnline = useOnline();
  return (
    <>
        <Header />
                {isOnline ? (
                  <>
                    <Outlet />
                  </>
                    ) : (
                    <OfflinePage />
                )}  
              <Footer />
    </>
  )
}

export default Homepage