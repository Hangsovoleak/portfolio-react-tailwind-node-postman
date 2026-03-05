/**
 * Technology: Node.js, Express, Prisma
 * Description:
 *      Controller for managing technical skills.
 *      Provides operations to list, add, edit, and remove skills from the portfolio.
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
 * @brief Retrieve all listed skills.
 * 
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON array of skills.
 */
const getAllSkills = async (req, res) => {
    try {
        const skills = await prisma.skill.findMany();
        res.json(skills);
    } catch (error) {
        console.error('Error fetching skills:', error);
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
};

/**
 * @brief Create a new skill entry.
 * 
 * @param {Object} req Express request object with skill name, iconUrl, and category.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON for the created skill.
 */
const createSkill = async (req, res) => {
    try {
        const { name, iconUrl, category } = req.body;
        const skill = await prisma.skill.create({
            data: {
                name,
                iconUrl,
                category
            }
        });
        res.json(skill);
    } catch (error) {
        console.error('Error creating skill:', error);
        res.status(500).json({ error: 'Failed to create skill record' });
    }
};

/**
 * @brief Update a technical skill.
 * 
 * @param {Object} req Express request object with update data.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON for the updated skill.
 */
const updateSkill = async (req, res) => {
    const { id } = req.params;
    try {
        const skill = await prisma.skill.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(skill);
    } catch (error) {
        console.error('Error updating skill:', error);
        res.status(500).json({ error: 'Failed to update skill record' });
    }
};

/**
 * @brief Delete a technical skill.
 * 
 * @param {Object} req Express request object with skill ID.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends confirmation message.
 */
const deleteSkill = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.skill.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Skill record deleted successfully' });
    } catch (error) {
        console.error('Error deleting skill:', error);
        res.status(500).json({ error: 'Failed to delete skill record' });
    }
};

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = {
    getAllSkills,
    createSkill,
    updateSkill,
    deleteSkill,
};
