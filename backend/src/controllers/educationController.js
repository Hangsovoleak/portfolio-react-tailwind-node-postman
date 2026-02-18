const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllEducation = async (req, res) => {
    try {
        const education = await prisma.education.findMany({
            where: { userId: 1 } //cuz only one user will have this portfolio
        });
        res.json(education);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch education' });
    }
};

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
        res.status(500).json({ error: 'Failed to create education' });
    }
};

const updateEducation = async (req, res) => {
    const { id } = req.params;
    try {
        const education = await prisma.education.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(education);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update education' });
    }
};

const deleteEducation = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.education.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Education deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete education' });
    }
};

module.exports = {
    getAllEducation,
    createEducation,
    updateEducation,
    deleteEducation,
};