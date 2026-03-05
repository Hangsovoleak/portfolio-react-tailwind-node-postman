/**
 * Description:
 *      Routing definitions for portfolio project endpoints.
 *      Directs requests for project-related data to the appropriate controller.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
const express = require('express');
const projectController = require('../controllers/projectController');

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const router = express.Router();

/*------------------------------------------------------------------------------
                                    ROUTES
------------------------------------------------------------------------------*/

// GET: Fetch all listed portfolio projects
router.get('/', projectController.getAllProjects);

// POST: Register a new project entry
router.post('/', projectController.createProject);

// PUT: Update project details for a specific entry
router.put('/:id', projectController.updateProject);

// DELETE: Remove a project entry from the registry
router.delete('/:id', projectController.deleteProject);

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = router;