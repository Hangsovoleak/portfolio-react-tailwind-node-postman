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
            return res.status(404).json({ error: 'Profile not found' });
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
        // Update core User information if provided
        if (name || email) {
            await prisma.user.update({
                where: { id: 1 },
                data: {
                    name: name,
                    email: email
                }
            });
        }

        // Upsert Profile information (update if exists, create if not)
        const profile = await prisma.profile.upsert({
            where: { userId: 1 },
            update: { bio, headline, resumeUrl },
            create: { userId: 1, bio, headline, resumeUrl }
        });

        // Retrieve the final state to ensure data consistency
        const user = await prisma.user.findUnique({ where: { id: 1 } });

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