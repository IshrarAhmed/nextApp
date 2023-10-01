
// pages/_app.js

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'; // Import persistStore function
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-loading-skeleton/dist/skeleton.css';
import MainLayout from '../pages/main-layout';
import { store } from '@/redux/Store';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }:AppProps) => {
  // Create the persistor using persistStore
  const persistor = persistStore(store);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <ToastContainer />
          <Component {...pageProps} />
        </MainLayout>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;




















// import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";

// import type { AppProps } from "next/app";
// import MainLayout from "../pages/main-layout";
// import { useEffect } from "react";
// import "react-loading-skeleton/dist/skeleton.css";
// import { Provider } from "react-redux";
// import { store } from "@/redux/Store";
// import 'react-toastify/dist/ReactToastify.css'; 
// import { ToastContainer } from 'react-toastify'
// import { PersistGate } from "redux-persist/integration/react";

//     const persistor = per
// export default function App({ Component, pageProps }: AppProps) {


//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);
//   return (
   
//     <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//     <MainLayout>
//     <ToastContainer/>
//           <Component {...pageProps} />

//     </MainLayout>
//     </PersistGate>
//     </Provider>


//   );
// }
