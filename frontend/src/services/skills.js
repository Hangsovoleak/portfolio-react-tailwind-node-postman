/**
 * Description:
 *      Service for managing technical skill API endpoints.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import api from "./api";

/*------------------------------------------------------------------------------
                            FUNCTION DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Retrieve all technical skills.
 * @returns {Promise} Axios response promise.
 */
export const getSkills = () => api.get("/skill");

/**
 * @brief Register a new technical skill.
 * @param {Object} payload Skill details.
 * @returns {Promise} Axios response promise.
 */
export const createSkill = (payload) => api.post("/skill", payload);

/**
 * @brief Update an existing technical skill record.
 * @param {string|number} id Skill ID.
 * @param {Object} payload Updated skill details.
 * @returns {Promise} Axios response promise.
 */
export const updateSkill = (id, payload) => api.put(`/skill/${id}`, payload);

/**
 * @brief Remove a technical skill record.
 * @param {string|number} id Skill ID.
 * @returns {Promise} Axios response promise.
 */
export const deleteSkill = (id) => api.delete(`/skill/${id}`);
