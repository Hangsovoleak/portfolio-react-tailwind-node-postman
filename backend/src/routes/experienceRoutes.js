/**
 * Description:
 *      Routing definitions for professional experience endpoints.
 *      Connects API requests to experience controller logic.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
const express = require('express');
const experienceController = require('../controllers/experienceController');

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const router = express.Router();

/*------------------------------------------------------------------------------
                                    ROUTES
------------------------------------------------------------------------------*/

// GET: Fetch all professional experience records
router.get('/', experienceController.getAllExperience);

// POST: Add a new professional experience record
router.post('/', experienceController.createExperience);

// PUT: Modify an existing experience record by ID
router.put('/:id', experienceController.updateExperience);

// DELETE: Remove an experience record by ID
router.delete('/:id', experienceController.deleteExperience);

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = router;