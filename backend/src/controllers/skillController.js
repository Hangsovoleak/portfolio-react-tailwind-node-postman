const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllSkills = async (req, res) => {
    try {
        const skill = await prisma.skill.findMany();
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
};

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
        res.status(500).json({ error: 'Failed to create skill' });
    }
};

const updateSkill = async (req, res) => {
    const { id } = req.params;
    try {
        const skill = await prisma.skill.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update skill' });
    }
};

const deleteSkill = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.skill.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete skill' });
    }
};

module.exports = {
    getAllSkills,
    createSkill,
    updateSkill,
    deleteSkill,
};
