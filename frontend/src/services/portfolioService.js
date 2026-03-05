/**
 * Description:
 *      Orchestrator service for aggregating all portfolio-related data.
 *      Provides a unified function to fetch profile, education, experience, projects, and skills.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { getEducation } from "./education";
import { getExperience } from "./experience";
import { getProfile } from "./profile";
import { getProjects } from "./project";
import { getSkills } from "./skills";

/*------------------------------------------------------------------------------
                            FUNCTION DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Aggregates all data required for the portfolio view.
 * 
 * Performs concurrent API requests and applies necessary data mapping.
 * 
 * @returns {Promise<Object>} Object containing profile, education, experience, projects, and skills.
 */
export async function fetchPortfolioData() {
    // Execute all data requests in parallel
    const [
        profileResponse,
        educationResponse,
        experienceResponse,
        projectsResponse,
        skillsResponse
    ] = await Promise.all([
        getProfile(),
        getEducation(),
        getExperience(),
        getProjects(),
        getSkills(),
    ]);

    // Return aggregated and mapped data
    return {
        profile: profileResponse.data,
        education: educationResponse.data,
        experience: experienceResponse.data,
        projects: projectsResponse.data,
        skills: skillsResponse.data,
    };
}
