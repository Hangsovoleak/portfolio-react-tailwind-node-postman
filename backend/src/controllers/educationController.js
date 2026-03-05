/**
 * Technology: Node.js, Express, Prisma
 * Description:
 *      Controller for handling education-related database operations.
 *      Provides functions to fetch, create, update, and delete education records.
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
 * @brief Fetch all education records for the primary user.
 * 
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with all education records.
 */
const getAllEducation = async (req, res) => {
    try {
        const education = await prisma.education.findMany({
            where: { userId: 1 } // Primary user identification
        });
        res.json(education);
    } catch (error) {
        console.error('Error fetching education:', error);
        res.status(500).json({ error: 'Failed to fetch education records' });
    }
};

/**
 * @brief Create a new education record.
 * 
 * @param {Object} req Express request object containing institution, degree, and period.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with the created education record.
 */
const createEducation = async (req, res) => {
    try {
        const { institution, degree, period } = req.body;
        const education = await prisma.education.create({
            data: {
                institution,
                degree,
                period,
                userId: 1
            }
        });
        res.json(education);
    } catch (error) {
        console.error('Error creating education:', error);
        res.status(500).json({ error: 'Failed to create education record' });
    }
};

/**
 * @brief Update an existing education record.
 * 
 * @param {Object} req Express request object containing record ID in params and updated data in body.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with the updated education record.
 */
const updateEducation = async (req, res) => {
    const { id } = req.params;
    try {
        const education = await prisma.education.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(education);
    } catch (error) {
        console.error('Error updating education:', error);
        res.status(500).json({ error: 'Failed to update education record' });
    }
};

/**
 * @brief Delete an education record.
 * 
 * @param {Object} req Express request object containing record ID in params.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response confirming deletion.
 */
const deleteEducation = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.education.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Education record deleted successfully' });
    } catch (error) {
        console.error('Error deleting education:', error);
        res.status(500).json({ error: 'Failed to delete education record' });
    }
};

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = {
    getAllEducation,
    createEducation,
    updateEducation,
    deleteEducation,
};