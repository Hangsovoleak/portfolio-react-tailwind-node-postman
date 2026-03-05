/**
 * Description:
 *      Service for managing portfolio project API endpoints.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import api from "./api";

/*------------------------------------------------------------------------------
                            FUNCTION DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Fetch all portfolio projects.
 * @returns {Promise} Axios response promise.
 */
export const getProjects = () => api.get("/project");

/**
 * @brief Create a new portfolio project record.
 * @param {Object} data Project details.
 * @returns {Promise} Axios response promise.
 */
export const createProject = (data) => api.post('/project', data);

/**
 * @brief Update an existing portfolio project record.
 * @param {string|number} id Project ID.
 * @param {Object} data Updated project details.
 * @returns {Promise} Axios response promise.
 */
export const updateProject = (id, data) => api.put(`/project/${id}`, data);

/**
 * @brief Delete a portfolio project record.
 * @param {string|number} id Project ID.
 * @returns {Promise} Axios response promise.
 */
export const deleteProject = (id) => api.delete(`/project/${id}`);
