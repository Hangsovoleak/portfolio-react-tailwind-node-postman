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

const navLink = [
    { id: "about", label: <House color="#0284c7" size={18} /> },
    { id: "education", label: <GraduationCap color="#0284c7" size={18} /> },
    { id: "experience", label: <Flame color="#f97316" size={18} /> },
    { id: "projects", label: <FolderGit2 color="#f43f5e" size={18} /> },
    { id: "skills", label: <Sparkles color="#7c3aed" size={18} /> },
    { id: "contact", label: <Contact color="#eab308" size={18} /> },
];

function Portfolio() {
    const [profile, setProfile] = useState(null);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");

    useEffect(() => {
        async function loadPortfolio() {
            try {
                setLoading(true);
                setErr("");

                const portfolioData = await fetchPortfolioData();

                setProfile(portfolioData.profile);
                setEducation(portfolioData.education);
                setExperience(portfolioData.experience);
                setProjects(portfolioData.projects);
                setSkills(portfolioData.skills);
            } catch (error) {
                setErr("Failed to load data. Check backend URL and API endpoint.");
            } finally {
                setLoading(false);
            }
        }

        loadPortfolio();
    }, []);

    if (loading) {
        return <div className="grid min-h-screen place-items-center bg-slate-50 font-mono text-slate-900">Loading...</div>;
    }

    if (err) {
        return <div className="grid min-h-screen place-items-center bg-slate-50 font-mono text-red-600">{err}</div>;
    }

    return (
        <div className="min-h-screen text-left text-slate-950">
            <Header
                links={navLink}
                cvUrl={profile?.cvUrl && profile.cvUrl !== "/cv.pdf" ? profile.cvUrl : "/assets/CV.pdf"}
            />

            <main>
                <AboutSection
                    profile={profile}
                    backgroundImage="https://i.pinimg.com/originals/82/8c/70/828c705f328792df4e365c9660dbfcc3.gif"
                />
                <EducationSection items={education} />
                <ExperienceSection items={experience} />
                <ProjectsSection projects={projects} />
                <SkillsSection skills={skills} />
                <Footer email={profile?.email} />
            </main>
        </div>
    );
}

export default Portfolio;
