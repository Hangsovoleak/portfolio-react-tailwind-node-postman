/**
 * Description:
 *      Routing definitions for user profile management.
 *      Provides unified access for profile retrieval and updates.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
const express = require('express');
const profileController = require('../controllers/profileController');

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const router = express.Router();

/*------------------------------------------------------------------------------
                                    ROUTES
------------------------------------------------------------------------------*/

// GET: Retrieve the primary user profile data
router.get('/', profileController.getProfile);

// PUT: Update or initialize user profile information
router.put('/', profileController.updateProfile);

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = router;