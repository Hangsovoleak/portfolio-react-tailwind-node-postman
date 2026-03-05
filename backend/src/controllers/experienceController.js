/**
 * Description:
 *      Controller for handling professional experience records.
 *      Supports CRUD operations for experience entries in the portfolio.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
const { PrismaClient } = require('@prisma/client');

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const prisma = new PrismaClient();

/*------------------------------------------------------------------------------
                            FUNCTION DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Retrieve all experience records.
 * 
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON array of experience records.
 */
const getAllExperience = async (req, res) => {
    try {
        const experience = await prisma.experience.findMany();
        res.json(experience);
    } catch (error) {
        console.error('Error fetching experience:', error);
        res.status(500).json({ error: 'Failed to fetch experience records' });
    }
};

/**
 * @brief Create a new professional experience entry.
 * 
 * @param {Object} req Express request object containing company, role, period, description, and logoUrl.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with the created experience.
 */
const createExperience = async (req, res) => {
    try {
        const { company, role, period, description, logoUrl } = req.body;
        const experience = await prisma.experience.create({
            data: {
                company,
                role,
                period,
                description,
                logoUrl,
            }
        });
        res.json(experience);
    } catch (error) {
        console.error('Error creating experience:', error);
        res.status(500).json({ error: 'Failed to create experience record' });
    }
};

/**
 * @brief Update an existing professional experience entry.
 * 
 * @param {Object} req Express request object containing ID in params and updated fields in body.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with the updated experience.
 */
const updateExperience = async (req, res) => {
    const { id } = req.params;
    try {
        const experience = await prisma.experience.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(experience);
    } catch (error) {
        console.error('Error updating experience:', error);
        res.status(500).json({ error: 'Failed to update experience record' });
    }
};

/**
 * @brief Delete a professional experience entry.
 * 
 * @param {Object} req Express request object containing record ID in params.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response confirming deletion.
 */
const deleteExperience = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.experience.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Experience record deleted successfully' });
    } catch (error) {
        console.error('Error deleting experience:', error);
        res.status(500).json({ error: 'Failed to delete experience record' });
    }
};

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = {
    getAllExperience,
    createExperience,
    updateExperience,
    deleteExperience,
};