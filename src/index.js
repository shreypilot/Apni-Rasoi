import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {swDev } from './swDev';
import { Provider } from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
    
 
);
swDev()
  .then(function (subscription) {
    console.log("Subscription successful: ", subscription);
  })
  .catch(function (error) {
    console.log("Subscription failed: ", error);
  });
