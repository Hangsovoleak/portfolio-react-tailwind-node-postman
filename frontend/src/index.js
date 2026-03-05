/**
 * Description:
 *      The main entry point for the React application.
 *      Mounts the root App component and initializes global styles and web vitals.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Global styles
import './index.css';

// Root application component
import App from './App';

// Performance measurement utility
import reportWebVitals from './reportWebVitals';

/*------------------------------------------------------------------------------
                                APPLICATION ROOT
------------------------------------------------------------------------------*/
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

/**
 * @brief Initialize and render the React application.
 */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*------------------------------------------------------------------------------
                               WEB VITALS / LOGGING
------------------------------------------------------------------------------*/
/**
 * @brief Monitor application performance.
 * 
 * To log results, pass a function (e.g., reportWebVitals(console.log)).
 * @see https://bit.ly/CRA-vitals
 */
reportWebVitals();
