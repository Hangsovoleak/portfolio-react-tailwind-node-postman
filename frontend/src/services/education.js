/**
 * Description:
 *      Service for interacting with education-related API endpoints.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import api from "./api";

/*------------------------------------------------------------------------------
                            FUNCTION DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Fetch all education records.
 * @returns {Promise} Axios response promise.
 */
export const getEducation = () => api.get("/education");

/**
 * @brief Create a new education entry.
 * @param {Object} data Education record details.
 * @returns {Promise} Axios response promise.
 */
export const createEducation = (data) => api.post('/education', data);

/**
 * @brief Update an existing education entry.
 * @param {string|number} id Record ID.
 * @param {Object} data Updated education details.
 * @returns {Promise} Axios response promise.
 */
export const updateEducation = (id, data) => api.put(`/education/${id}`, data);

/**
 * @brief Delete an education entry.
 * @param {string|number} id Record ID.
 * @returns {Promise} Axios response promise.
 */
export const deleteEducation = (id) => api.delete(`/education/${id}`);