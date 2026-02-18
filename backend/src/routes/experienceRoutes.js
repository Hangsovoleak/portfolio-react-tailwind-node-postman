const express = require('express')
const router = express.Router();
const experienceController = require('../controllers/experienceController');

router.get('/', experienceController.getAllExperience);
router.post('/', experienceController.createExperience);
router.put('/:id', experienceController.updateExperience);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;