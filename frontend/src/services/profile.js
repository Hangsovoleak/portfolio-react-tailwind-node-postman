/**
 * Description:
 *      Service for managing user profile data.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import api from "./api";

/*------------------------------------------------------------------------------
                            FUNCTION DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Retrieve the unified user profile.
 * @returns {Promise} Axios response promise.
 */
export const getProfile = () => api.get("/profile");

/**
 * @brief Update or create the user profile.
 * @param {Object} payload Profile details.
 * @returns {Promise} Axios response promise.
 */
export const updateProfile = (payload) => api.put("/profile", payload);
