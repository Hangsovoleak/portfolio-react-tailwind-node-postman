/**
 * Technology: axios
 * Description:
 *      Axios client configuration for communicating with the backend API.
 *      Defines the base URL and shared request settings.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import axios from 'axios';

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend API endpoint
});

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default api;