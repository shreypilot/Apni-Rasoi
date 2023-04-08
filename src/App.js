
import ReactDOM from 'react-dom/client';
import './App.css';
import { Provider } from "react-redux";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Profile from "./components/ProfileClass";
import store from "./utils/store";
import Contact from "./components/Contact";
import Login from "./components/Login";
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import Shimmer from "./components/Shimmer";
import useOnline from "./utils/useOnline";
import { useNavigate } from "react-router-dom";
import OfflinePage from './components/OfflinePage';
import Sidebar from './components/Sidebar';
// import firebase from './firebase'
const Cart = lazy(() => import("./components/Cart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const isOnline = useOnline();
  const navigate = useNavigate();
  // const msg=firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })


    return (
      <>
      
        <Provider store={store} >
          <div className='flex'>
              <div>
              <Header />
                {isOnline ? (
                  <>
                    <Outlet />
                  </>
                    ) : (
                    <OfflinePage />
                )}  
              <Footer />
            </div>
            <div>
              <Sidebar />
            </div>
          </div>    
        </Provider>
        
    </>
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
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          ),
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
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Cart />
            </Suspense>
          ),
        },
        {
            path: "login",
            element: <Login />,
        },
        
      ],
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


 
 