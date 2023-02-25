 
 
   import React from 'react';
   import ReactDOM from 'react-dom/client';
 import App from "./App"
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// } from './RaviComponent/Products-Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={store}>
  <BrowserRouter>
  <ChakraProvider >
    <App />
  </ChakraProvider>
</BrowserRouter>
</Provider>
 
);



reportWebVitals();
