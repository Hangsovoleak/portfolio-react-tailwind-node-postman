/**
 * Description:
 *      Main application layout and routing configuration.
 *      Defines the primary routes for the Portfolio and Dashboard pages.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/

// Page components
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Root application component.
 * 
 * Sets up the React Router and maps URL paths to specific page components.
 * 
 * @returns {JSX.Element} The rendered application with routing.
 */
function App() {
  return (
    <Routes>
      {/* Public Portfolio Route */}
      <Route path="/" element={<Portfolio />} />
      {/* Administrative Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default App;
