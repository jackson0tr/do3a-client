import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <App />
    </Provider>);

reportWebVitals();