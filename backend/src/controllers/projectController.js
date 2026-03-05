/**
 * Technology: Node.js, Express, Prisma
 * Description:
 *      Controller for managing portfolio projects.
 *      Handles logic for listing, creating, and modifying project entries.
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
 * @brief Fetch all portfolio projects.
 * 
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with all projects.
 */
const getAllProjects = async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

/**
 * @brief Create a new portfolio project entry.
 * 
 * @param {Object} req Express request object with project details.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON for the created project.
 */
const createProject = async (req, res) => {
    try {
        const { title, description, imageUrl, projectUrl, tags } = req.body;
        const project = await prisma.project.create({
            data: {
                title,
                description,
                imageUrl,
                projectUrl,
                tags, // Expected to be an array of strings
            }
        });
        res.json(project);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Failed to create project record' });
    }
};

/**
 * @brief Update a portfolio project.
 * 
 * @param {Object} req Express request object with update data.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON for the updated project.
 */
const updateProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await prisma.project.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(project);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ error: 'Failed to update project record' });
    }
};

/**
 * @brief Delete a portfolio project.
 * 
 * @param {Object} req Express request object with project ID.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends confirmation message.
 */
const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.project.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Project record deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project record' });
    }
};

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = {
    getAllProjects,
    createProject,
    updateProject,
    deleteProject,
};