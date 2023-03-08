import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Provider } from "react-redux";

import Error from "./components/Error"
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from './components/ProfileClass';

import RestaurantMenu from './components/RestaurantMenu';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing

const AppLayout = () => {
    return (
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    );
  };

const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
          children: [{ // nested routing
            path: "profile",
            element: <Profile />,
          }]
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  function App() {
    return (
   <div>
        <RouterProvider router={appRouter} />

        {/**
     * Header
     *  .Logo
     *  .NavItems(on RightSide)
     *  -cart
     * 
     * Body
     *  .SearchBar
     *  .RestrauntList
     *    .ResturantCard
     *      .Image
     *      .Name
     *      .Rating 
     *      .Cusines
     * 
     * Footer
     *  .Copyright 
     *  .Link to social media
     */}
    </div>
    
  );
}
    
export default App;


 
 