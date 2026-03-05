/**
 * Description:
 *      Administrative dashboard for managing portfolio content.
 *      Provides CRUD interfaces for all portfolio entities.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";

// Modals
import ProfileModal from "../components/modals/ProfileModal";
import EducationModal from "../components/modals/EducationModal";
import ExperienceModal from "../components/modals/ExperienceModal";
import ProjectModal from "../components/modals/ProjectModal";
import SkillModal from "../components/modals/SkillModal";

// Icons
import {
    User,
    GraduationCap,
    Briefcase,
    FolderKanban,
    Wrench,
    Pencil,
    Plus,
    Trash2,
} from "lucide-react";

// Services
import { updateProfile } from "../services/profile";
import {
    createEducation,
    updateEducation,
    deleteEducation,
} from "../services/education";
import {
    createExperience,
    deleteExperience,
    updateExperience,
} from "../services/experience";
import {
    createProject,
    updateProject,
    deleteProject,
} from "../services/project";
import {
    createSkill,
    deleteSkill,
    updateSkill,
} from "../services/skills";
import { fetchPortfolioData } from "../services/portfolioService";

/*------------------------------------------------------------------------------
                               SUB-COMPONENTS
------------------------------------------------------------------------------*/

/**
 * @brief Reusable button for dashboard actions.
 */
function ActionButton({ label, tone = "neutral", icon, onClick }) {
    const toneClass = {
        create: "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
        update: "border-sky-300 bg-sky-50 text-sky-800 hover:bg-sky-100",
        delete: "border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100",
        neutral: "border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-bold tracking-wide transition ${toneClass[tone] || toneClass.neutral}`}
        >
            {icon}
            {label}
        </button>
    );
}

/**
 * @brief Styled wrapper for administrative sections.
 */
function AdminSection({ title, icon, count, onCreate, items, renderRow }) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700">
                        {icon}
                    </div>
                    <div>
                        <h2 className="text-lg font-black text-slate-900">{title}</h2>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {count} records
                        </p>
                    </div>
                </div>
                {onCreate && (
                    <ActionButton
                        label="POST"
                        tone="create"
                        icon={<Plus size={14} />}
                        onClick={onCreate}
                    />
                )}
            </div>

            <div className="space-y-2">
                {items.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-medium text-slate-500">
                        No data yet.
                    </div>
                ) : (
                    items.map(renderRow)
                )}
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Comprehensive management interface for the portfolio content.
 * 
 * @returns {JSX.Element} The rendered dashboard.
 */
function Dashboard() {
    // Data State
    const [profile, setProfile] = useState(null);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    // UI / UX State
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // Modal Control State
    const [activeModals, setActiveModals] = useState({
        profile: false,
        education: false,
        experience: false,
        project: false,
        skill: false,
    });

    // Object Editing State
    const [editingState, setEditingState] = useState({
        education: null,
        experience: null,
        project: null,
        skill: null,
    });

    /**
     * @brief Loads initial data for the dashboard.
     */
    useEffect(() => {
        async function loadDashboard() {
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
                console.error("Dashboard Load Error:", error);
                setErrorMessage("Failed to load dashboard data. Ensure backend is reachable.");
            } finally {
                setIsLoading(false);
            }
        }

        loadDashboard();
    }, []);

    /*--------------------------------------------------------------------------
                                ACTION HANDLERS
    --------------------------------------------------------------------------*/

    /**
     * @brief Persists profile updates.
     */
    const handleSaveProfile = async (data) => {
        const res = await updateProfile(data);
        setProfile(res.data);
        setActiveModals(prev => ({ ...prev, profile: false }));
    };

    /**
     * @brief Persists education create/update.
     */
    const handleSaveEducation = async (data) => {
        const payload = {
            institution: data.institution.trim(),
            degree: data.degree.trim(),
            period: data.period.trim(),
        };

        if (editingState.education) {
            const res = await updateEducation(editingState.education.id, payload);
            setEducation(prev => prev.map(x => x.id === editingState.education.id ? res.data : x));
        } else {
            const res = await createEducation(payload);
            setEducation(prev => [...prev, res.data]);
        }
        setEditingState(prev => ({ ...prev, education: null }));
        setActiveModals(prev => ({ ...prev, education: false }));
    };

    /**
     * @brief Persists experience create/update.
     */
    const handleSaveExperience = async (data) => {
        const payload = {
            company: String(data.company || "").trim(),
            role: String(data.role || "").trim(),
            period: String(data.period || "").trim(),
            description: String(data.description || "")
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean)
                .join("\n"),
            logoUrl: String(data.logoUrl || "").trim() || null,
        };

        if (editingState.experience) {
            const res = await updateExperience(editingState.experience.id, payload);
            setExperience(prev => prev.map(x => x.id === editingState.experience.id ? res.data : x));
        } else {
            const res = await createExperience(payload);
            setExperience(prev => [...prev, res.data]);
        }

        setEditingState(prev => ({ ...prev, experience: null }));
        setActiveModals(prev => ({ ...prev, experience: false }));
    };

    /**
     * @brief Persists project create/update.
     */
    const handleSaveProject = async (data) => {
        const payload = {
            title: data.title.trim(),
            description: data.description.trim(),
            imageUrl: data.imageUrl.trim() || null,
            projectUrl: data.projectUrl.trim() || null,
            tags: data.tags.split(",").map(t => t.trim()).filter(Boolean),
        };

        if (editingState.project) {
            const res = await updateProject(editingState.project.id, payload);
            setProjects(prev => prev.map(x => x.id === editingState.project.id ? res.data : x));
        } else {
            const res = await createProject(payload);
            setProjects(prev => [...prev, res.data]);
        }
        setEditingState(prev => ({ ...prev, project: null }));
        setActiveModals(prev => ({ ...prev, project: false }));
    };

    /**
     * @brief Persists skill create/update.
     */
    const handleSaveSkill = async (data) => {
        const payload = {
            name: data.name.trim(),
            iconUrl: data.iconUrl.trim() || null,
        };

        if (editingState.skill) {
            const res = await updateSkill(editingState.skill.id, payload);
            setSkills(prev => prev.map(x => x.id === editingState.skill.id ? res.data : x));
        } else {
            const res = await createSkill(payload);
            setSkills(prev => [...prev, res.data]);
        }
        setEditingState(prev => ({ ...prev, skill: null }));
        setActiveModals(prev => ({ ...prev, skill: false }));
    };

    /*--------------------------------------------------------------------------
                                DELETION HANDLERS
    --------------------------------------------------------------------------*/

    const handleDeleteEducation = async (id) => {
        if (!window.confirm("Jhg Delete education ng?")) return;
        await deleteEducation(id);
        setEducation(prev => prev.filter(x => x.id !== id));
    };

    const handleDeleteExperience = async (id) => {
        if (!window.confirm("Jhg Delete Experience ng?")) return;
        await deleteExperience(id);
        setExperience(prev => prev.filter(x => x.id !== id));
    };

    const handleDeleteProject = async (id) => {
        if (!window.confirm("Jhg Delete Project ng men?")) return;
        await deleteProject(id);
        setProjects(prev => prev.filter(x => x.id !== id));
    };

    const handleDeleteSkill = async (id) => {
        if (!window.confirm("Jhg Delete Skill ng men?")) return;
        await deleteSkill(id);
        setSkills(prev => prev.filter(x => x.id !== id));
    };

    // Stats Calculation
    const totalRecords = useMemo(
        () => education.length + experience.length + projects.length + skills.length,
        [education.length, experience.length, projects.length, skills.length]
    );

    /*--------------------------------------------------------------------------
                                RENDER LOGIC
    --------------------------------------------------------------------------*/

    if (isLoading) {
        return <div className="grid min-h-screen place-items-center bg-slate-100 font-mono">Initializing Dashboard Control...</div>;
    }

    if (errorMessage) {
        return <div className="grid min-h-screen place-items-center bg-slate-100 p-6 text-red-600 font-mono text-center">{errorMessage}</div>;
    }

    return (
        <div className="min-h-screen font-mono">
            {/* Header Navigation */}
            <Header links={[{ id: "home", label: "View Site", href: "/" }]} />

            <main className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28">

                {/* Dashboard Summary Bar */}
                <section className="mb-6 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Control Panel</h1>
                        </div>

                        <div className="grid min-w-[220px] grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wide">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700">Total: {totalRecords}</div>
                            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700">Sections: 5</div>
                            <div className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-800">POST: Create</div>
                            <div className="rounded-lg border border-sky-300 bg-sky-50 px-3 py-2 text-sky-800">PUT: Update</div>
                        </div>
                    </div>
                </section>

                {/* Section Management Grid */}
                <div className="space-y-5">

                    {/* Profile Section */}
                    <section className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700"><User size={18} /></div>
                                <h2 className="text-lg font-black text-slate-900">Profile</h2>
                            </div>
                            <ActionButton
                                label="PUT"
                                tone="update"
                                icon={<Pencil size={14} />}
                                onClick={() => setActiveModals(p => ({ ...p, profile: true }))}
                            />
                        </div>
                        <div className="grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 sm:grid-cols-2">
                            <div><span className="font-bold">Name:</span> {profile?.name || "-"}</div>
                            <div className="sm:col-span-2"><span className="font-bold">Bio:</span> {profile?.bio || "-"}</div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <AdminSection
                        title="Education"
                        icon={<GraduationCap size={18} />}
                        count={education.length}
                        onCreate={() => {
                            setEditingState(p => ({ ...p, education: null }));
                            setActiveModals(p => ({ ...p, education: true }));
                        }}
                        items={education}
                        renderRow={(entry) => (
                            <div key={entry.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">{entry.institution} | {entry.degree}</div>
                                <div className="flex gap-2">
                                    <ActionButton label="PUT" tone="update" icon={<Pencil size={14} />} onClick={() => { setEditingState(p => ({ ...p, education: entry })); setActiveModals(p => ({ ...p, education: true })); }} />
                                    <ActionButton label="DELETE" tone="delete" icon={<Trash2 size={14} />} onClick={() => handleDeleteEducation(entry.id)} />
                                </div>
                            </div>
                        )}
                    />

                    {/* Experience Section */}
                    <AdminSection
                        title="Experience"
                        icon={<Briefcase size={18} />}
                        count={experience.length}
                        onCreate={() => {
                            setEditingState(p => ({ ...p, experience: null }));
                            setActiveModals(p => ({ ...p, experience: true }));
                        }}
                        items={experience}
                        renderRow={(x) => (
                            <div key={x.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">{x.company} | {x.role}</div>
                                <div className="flex gap-2">
                                    <ActionButton label="PUT" tone="update" icon={<Pencil size={14} />} onClick={() => { setEditingState(p => ({ ...p, experience: x })); setActiveModals(p => ({ ...p, experience: true })); }} />
                                    <ActionButton label="DELETE" tone="delete" icon={<Trash2 size={14} />} onClick={() => handleDeleteExperience(x.id)} />
                                </div>
                            </div>
                        )}
                    />

                    {/* Projects Section */}
                    <AdminSection
                        title="Projects"
                        icon={<FolderKanban size={18} />}
                        count={projects.length}
                        onCreate={() => {
                            setEditingState(p => ({ ...p, project: null }));
                            setActiveModals(p => ({ ...p, project: true }));
                        }}
                        items={projects}
                        renderRow={(project) => (
                            <div key={project.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">{project.title}</div>
                                <div className="flex gap-2">
                                    <ActionButton label="PUT" tone="update" icon={<Pencil size={14} />} onClick={() => { setEditingState(p => ({ ...p, project: project })); setActiveModals(p => ({ ...p, project: true })); }} />
                                    <ActionButton label="DELETE" tone="delete" icon={<Trash2 size={14} />} onClick={() => handleDeleteProject(project.id)} />
                                </div>
                            </div>
                        )}
                    />

                    {/* Skills Section */}
                    <AdminSection
                        title="Skills"
                        icon={<Wrench size={18} />}
                        count={skills.length}
                        onCreate={() => {
                            setEditingState(p => ({ ...p, skill: null }));
                            setActiveModals(p => ({ ...p, skill: true }));
                        }}
                        items={skills}
                        renderRow={(skill) => (
                            <div key={skill.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">{skill.name}</div>
                                <div className="flex gap-2">
                                    <ActionButton label="PUT" tone="update" icon={<Pencil size={14} />} onClick={() => { setEditingState(p => ({ ...p, skill: skill })); setActiveModals(p => ({ ...p, skill: true })); }} />
                                    <ActionButton label="DELETE" tone="delete" icon={<Trash2 size={14} />} onClick={() => handleDeleteSkill(skill.id)} />
                                </div>
                            </div>
                        )}
                    />
                </div>
            </main>

            {/* Application Modals */}
            <ProfileModal
                open={activeModals.profile}
                onClose={() => setActiveModals(p => ({ ...p, profile: false }))}
                initialData={profile}
                onSave={handleSaveProfile}
            />
            <EducationModal
                open={activeModals.education}
                onClose={() => { setActiveModals(p => ({ ...p, education: false })); setEditingState(p => ({ ...p, education: null })); }}
                initialData={editingState.education}
                onSave={handleSaveEducation}
            />
            <ExperienceModal
                open={activeModals.experience}
                onClose={() => { setActiveModals(p => ({ ...p, experience: false })); setEditingState(p => ({ ...p, experience: null })); }}
                initialData={editingState.experience}
                onSave={handleSaveExperience}
            />
            <ProjectModal
                open={activeModals.project}
                onClose={() => { setActiveModals(p => ({ ...p, project: false })); setEditingState(p => ({ ...p, project: null })); }}
                initialData={editingState.project}
                onSave={handleSaveProject}
            />
            <SkillModal
                open={activeModals.skill}
                onClose={() => { setActiveModals(p => ({ ...p, skill: false })); setEditingState(p => ({ ...p, skill: null })); }}
                initialData={editingState.skill}
                onSave={handleSaveSkill}
            />
        </div>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default Dashboard;
