const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllProjects = async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

const createProject = async (req, res) => {
    try {
        const { title, description, imageUrl, projectUrl, tages } = req.body;
        const project = await prisma.project.create({
            data: {
                title,
                description,
                imageUrl,
                projectUrl,
                tags, //Prisma handles array input automatically
            }
        });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project' });
    }
};

const updateProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await prisma.project.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update project' });
    }
};

const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.project.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
};

module.exports = {
    getAllProjects,
    createProject,
    updateProject,
    deleteProject,
};