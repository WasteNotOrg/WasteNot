import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedProvider from './providers/FeedProvider.jsx';

ReactDom.render(
  <BrowserRouter>
    <FeedProvider>
      <App />
    </FeedProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
