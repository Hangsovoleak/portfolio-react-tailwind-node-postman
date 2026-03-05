/**
 * Description:
 *      Routing definitions for technical skill management.
 *      Exposes endpoints to list, add, update, or remove skills.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
const express = require('express');
const skillController = require('../controllers/skillController');

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const router = express.Router();

/*------------------------------------------------------------------------------
                                    ROUTES
------------------------------------------------------------------------------*/

// GET: Retrieve all technical skills
router.get('/', skillController.getAllSkills);

// POST: Add a new technical skill
router.post('/', skillController.createSkill);

// PUT: Update an existing skill entry by ID
router.put('/:id', skillController.updateSkill);

// DELETE: Delete a skill entry by ID
router.delete('/:id', skillController.deleteSkill);

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = router;