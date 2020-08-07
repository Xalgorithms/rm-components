import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, Slide } from 'react-toastify';
import * as serviceWorker from './serviceWorker';
import Application from './layouts/Application';
import 'react-toastify/dist/ReactToastify.css';
import './application.css';

ReactDOM.render(
  <React.StrictMode>
    <Application />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      transition={Slide}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
