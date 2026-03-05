/**
 * Technology: Node.js, Express, Prisma
 * Description:
 *      Controller for managing the primary user profile.
 *      Handles profile retrieval and upsert (update/create) operations.
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
 * @brief Retrieve the unified user profile.
 * 
 * Includes user account details and portfolio profile information.
 * 
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with flattened profile data.
 */
const getProfile = async (req, res) => {
    try {
        const profile = await prisma.profile.findUnique({
            where: { userId: 1 },
            include: {
                user: true
            }
        });

        if (!profile) {
            return res.json({
                id: null,
                userId: 1,
                bio: '',
                headline: '',
                resumeUrl: '',
                name: '',
                email: '',
            });
        }

        // Flatten the response for frontend convenience
        const responseData = {
            ...profile,
            name: profile.user.name,
            email: profile.user.email,
        };

        res.json(responseData);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};

/**
 * @brief Update or Create the user profile.
 * 
 * Simultaneously updates core user information (name, email) and portfolio profile details.
 * 
 * @param {Object} req Express request object with name, email, bio, headline, and resumeUrl.
 * @param {Object} res Express response object.
 * @returns {Promise<void>} Sends JSON response with the complete updated profile.
 */
const updateProfile = async (req, res) => {
    const { name, email, bio, headline, resumeUrl } = req.body;
    try {
        // Ensure the primary user exists, then update provided fields.
        const user = await prisma.user.upsert({
            where: { id: 1 },
            update: {
                ...(name !== undefined ? { name } : {}),
                ...(email !== undefined ? { email } : {}),
            },
            create: {
                id: 1,
                name: name ?? '',
                email: email ?? 'portfolio-owner@example.com',
            },
        });

        // Upsert Profile information (update if exists, create if not)
        const profile = await prisma.profile.upsert({
            where: { userId: 1 },
            update: {
                ...(bio !== undefined ? { bio } : {}),
                ...(headline !== undefined ? { headline } : {}),
                ...(resumeUrl !== undefined ? { resumeUrl } : {}),
            },
            create: {
                userId: 1,
                bio: bio ?? '',
                headline: headline ?? '',
                resumeUrl: resumeUrl ?? '',
            }
        });

        res.json({
            ...profile,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ error: 'Failed to update user profile' });
    }
};

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
module.exports = {
    getProfile,
    updateProfile,
};
