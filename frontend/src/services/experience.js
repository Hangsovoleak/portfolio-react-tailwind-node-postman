/**
 * Description:
 *      Service for interacting with professional experience API endpoints.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import api from "./api";

/*------------------------------------------------------------------------------
                            FUNCTION DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Fetch all professional experience records.
 * @returns {Promise} Axios response promise.
 */
export const getExperience = () => api.get("/experience");

/**
 * @brief Create a new professional experience entry.
 * @param {Object} payload Experience details.
 * @returns {Promise} Axios response promise.
 */
export const createExperience = (payload) => api.post("/experience", payload);

/**
 * @brief Update an existing professional experience entry.
 * @param {string|number} id Record ID.
 * @param {Object} data Updated experience details.
 * @returns {Promise} Axios response promise.
 */
export const updateExperience = (id, data) => api.put(`/experience/${id}`, data);

/**
 * @brief Delete a professional experience entry.
 * @param {string|number} id Record ID.
 * @returns {Promise} Axios response promise.
 */
export const deleteExperience = (id) => api.delete(`/experience/${id}`);
