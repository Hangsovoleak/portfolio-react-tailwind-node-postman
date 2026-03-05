/**
 * Technology: Node.js, Express
 * Description:
 *      Routing definitions for education-related API endpoints.
 *      Maps HTTP methods to education controller functions.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
const express = require('express');
const educationController = require('../controllers/educationController');

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const router = express.Router();

/*------------------------------------------------------------------------------
                                    ROUTES
------------------------------------------------------------------------------*/

// GET: Retrieve all education records
router.get('/', educationController.getAllEducation);

// POST: Create a new education record
router.post('/', educationController.createEducation);

// PUT: Update an existing education record by ID
router.put('/:id', educationController.updateEducation);

// DELETE: Remove an education record by ID
router.delete('/:id', educationController.deleteEducation);

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = router;