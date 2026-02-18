const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllExperience = async (req, res) => {
    try {
        const experience = await prisma.experience.findMany();
        res.json(experience);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch experience' });
    }
};

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
        console.error(error);
        res.status(500).json({ error: 'Failed to create experience' });
    }
};

const updateExperience = async (req, res) => {
    const { id } = req.params;
    try {
        const experience = await prisma.experience.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(experience);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update experience' });
    }
};

const deleteExperience = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.experience.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Experience deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete experience' });
    }
};

module.exports = {
    getAllExperience,
    createExperience,
    updateExperience,
    deleteExperience,
};