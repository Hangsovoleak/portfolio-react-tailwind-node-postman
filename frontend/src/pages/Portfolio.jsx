/**
 * Description:
 *      Primary public-facing portfolio page.
 *      Orchestrates the loading of all portfolio data and renders the various sections.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperiencesSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

import { House, GraduationCap, Flame, FolderGit2, Sparkles, Contact } from "lucide-react";
import { fetchPortfolioData } from "../services/portfolioService";

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const NAVIGATION_LINKS = [
    { id: "about", label: <House color="#0284c7" size={18} /> },
    { id: "education", label: <GraduationCap color="#0284c7" size={18} /> },
    { id: "experience", label: <Flame color="#f97316" size={18} /> },
    { id: "projects", label: <FolderGit2 color="#f43f5e" size={18} /> },
    { id: "skills", label: <Sparkles color="#7c3aed" size={18} /> },
    { id: "contact", label: <Contact color="#eab308" size={18} /> },
];

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Main Portfolio application page.
 * 
 * @returns {JSX.Element} The rendered portfolio page.
 */
function Portfolio() {
    // State management for portfolio data
    const [profile, setProfile] = useState(null);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    // UI State
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    /**
     * @brief Loads all portfolio data from the backend services.
     */
    useEffect(() => {
        async function loadPortfolio() {
            try {
                setIsLoading(true);
                setErrorMessage("");

                const portfolioData = await fetchPortfolioData();

                setProfile(portfolioData.profile);
                setEducation(portfolioData.education);
                setExperience(portfolioData.experience);
                setProjects(portfolioData.projects);
                setSkills(portfolioData.skills);
            } catch (error) {
                console.error("Portfolio Data Fetch Error:", error);
                setErrorMessage("Failed to load portfolio data. Please ensure the backend is reachable.");
            } finally {
                setIsLoading(false);
            }
        }

        loadPortfolio();
    }, []);

    // Loader View
    if (isLoading) {
        return (
            <div className="grid min-h-screen place-items-center bg-slate-50 font-mono text-slate-900">
                <div className="flex items-center gap-3">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
                    Loading Portfolio Components...
                </div>
            </div>
        );
    }

    // Error View
    if (errorMessage) {
        return (
            <div className="grid min-h-screen place-items-center bg-slate-50 font-mono text-rose-600 px-6 text-center">
                {errorMessage}
            </div>
        );
    }

    return (
        <div className="min-h-screen text-left text-slate-950">
            {/* Navigation Header */}
            <Header
                links={NAVIGATION_LINKS}
            />

            {/* Main Content Sections */}
            <main>
                <AboutSection
                    profile={profile}
                    backgroundImage="https://i.pinimg.com/originals/82/8c/70/828c705f328792df4e365c9660dbfcc3.gif"
                />
                <EducationSection items={education} />
                <ExperienceSection items={experience} />
                <ProjectsSection projects={projects} />
                <SkillsSection skills={skills} />
            </main>

            {/* Footer and Contact */}
            <Footer />
        </div>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default Portfolio;
