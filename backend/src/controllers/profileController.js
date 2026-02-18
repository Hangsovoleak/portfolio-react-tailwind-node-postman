const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProfile = async (req, res) => {
    try {
        const profile = await prisma.profile.findUnique({
            where: { userId: 1 },
            include: {
                user: true
            }
        });

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        // Flatten the response for frontend convenience
        const responseOnly = {
            ...profile,
            name: profile.user.name,
            email: profile.user.email,
        };

        res.json(responseOnly);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};

const updateProfile = async (req, res) => {
    const { name, email, bio, headline, resumeUrl } = req.body;
    try {
        // Update User info
        if (name || email) {
            await prisma.user.update({
                where: { id: 1 },
                data: {
                    name: name,
                    email: email
                }
            });
        }

        // Update/Create Profile info
        const profile = await prisma.profile.upsert({
            where: { userId: 1 },
            update: { bio, headline, resumeUrl },
            create: { userId: 1, bio, headline, resumeUrl }
        });

        // Fetch updated user to return complete data
        const user = await prisma.user.findUnique({ where: { id: 1 } });

        res.json({
            ...profile,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
};

module.exports = {
    getProfile,
    updateProfile,
};