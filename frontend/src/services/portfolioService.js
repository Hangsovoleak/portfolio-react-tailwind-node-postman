import { getEducation } from "./education";
import { getExperience } from "./experience";
import { getProfile } from "./profile";
import { getProjects } from "./project";
import { getSkills } from "./skills";
import { toExperienceViewModel } from "../mappers/experienceMapper";

export async function fetchPortfolioData() {
    const [profileResponse, educationResponse, experienceResponse, projectsResponse, skillsResponse] =
        await Promise.all([
            getProfile(),
            getEducation(),
            getExperience(),
            getProjects(),
            getSkills(),
        ]);

    return {
        profile: profileResponse.data,
        education: educationResponse.data,
        experience: experienceResponse.data.map(toExperienceViewModel),
        projects: projectsResponse.data,
        skills: skillsResponse.data,
    };
}
