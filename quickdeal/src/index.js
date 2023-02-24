 
 
   
 
 import App from "./App"
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
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
