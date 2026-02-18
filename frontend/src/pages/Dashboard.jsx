import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import ProfileModal from "../components/modals/ProfileModal";
import EducationModal from "../components/modals/EducationModal";
import ExperienceModal from "../components/modals/ExperienceModal";
import ProjectModal from "../components/modals/ProjectModal";
import SkillModal from "../components/modals/SkillModal";
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
import { toExperienceApiPayload, toExperienceViewModel } from "../mappers/experienceMapper";

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

function Dashboard() {
    const [profile, setProfile] = useState(null);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");

    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showEducationModal, setShowEducationModal] = useState(false);
    const [showExperienceModal, setShowExperienceModal] = useState(false);
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [showSkillModal, setShowSkillModal] = useState(false);

    const [editingEducation, setEditingEducation] = useState(null);
    const [editingExperience, setEditingExperience] = useState(null);
    const [editingProject, setEditingProject] = useState(null);
    const [editingSkill, setEditingSkill] = useState(null);

    useEffect(() => {
        async function loadDashboard() {
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
                setErr("Failed to load dashboard data. Make sure the backend is running.");
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    async function handleSaveProfile(data) {
        const res = await updateProfile(data);
        setProfile(res.data);
        setShowProfileModal(false);
    }

    async function handleSaveEducation(data) {
        const payload = {
            institution: data.institution.trim(),
            degree: data.degree.trim(),
            period: data.period.trim(),
        };

        if (editingEducation) {
            const res = await updateEducation(editingEducation.id, payload);
            setEducation((prev) =>
                prev.map((x) => (x.id === editingEducation.id ? res.data : x))
            );
        } else {
            const res = await createEducation(payload);
            setEducation((prev) => [...prev, res.data]);
        }
        setEditingEducation(null);
        setShowEducationModal(false);
    }

    async function handleSaveExperience(data) {
        const payload = toExperienceApiPayload(data);

        if (editingExperience) {
            const res = await updateExperience(editingExperience.id, payload);
            setExperience((prev) =>
                prev.map((x) => (x.id === editingExperience.id ? toExperienceViewModel(res.data) : x))
            );
        } else {
            const res = await createExperience(payload);
            setExperience((prev) => [...prev, toExperienceViewModel(res.data)]);
        }
        setEditingExperience(null);
        setShowExperienceModal(false);
    }

    async function handleSaveProject(data) {
        const payload = {
            title: data.title.trim(),
            description: data.description.trim(),
            imageUrl: data.imageUrl.trim() || null,
            projectUrl: data.projectUrl.trim() || null,
            tags: data.tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean),
        };

        if (editingProject) {
            const res = await updateProject(editingProject.id, payload);
            setProjects((prev) =>
                prev.map((x) => (x.id === editingProject.id ? res.data : x))
            );
        } else {
            const res = await createProject(payload);
            setProjects((prev) => [...prev, res.data]);
        }
        setEditingProject(null);
        setShowProjectModal(false);
    }

    async function handleSaveSkill(data) {
        const payload = {
            name: data.name.trim(),
            iconUrl: data.iconUrl.trim() || null,
        };

        if (editingSkill) {
            const res = await updateSkill(editingSkill.id, payload);
            setSkills((prev) =>
                prev.map((x) => (x.id === editingSkill.id ? res.data : x))
            );
        } else {
            const res = await createSkill(payload);
            setSkills((prev) => [...prev, res.data]);
        }
        setEditingSkill(null);
        setShowSkillModal(false);
    }

    async function handleDeleteEducation(id) {
        if (!window.confirm("Delete this education record?")) return;
        await deleteEducation(id);
        setEducation((prev) => prev.filter((x) => x.id !== id));
    }

    async function handleDeleteExperience(id) {
        if (!window.confirm("Delete this experience record?")) return;
        await deleteExperience(id);
        setExperience((prev) => prev.filter((x) => x.id !== id));
    }

    async function handleDeleteProject(id) {
        if (!window.confirm("Delete this project?")) return;
        await deleteProject(id);
        setProjects((prev) => prev.filter((x) => x.id !== id));
    }

    async function handleDeleteSkill(id) {
        if (!window.confirm("Delete this skill?")) return;
        await deleteSkill(id);
        setSkills((prev) => prev.filter((x) => x.id !== id));
    }

    const totalRecords = useMemo(
        () => education.length + experience.length + projects.length + skills.length,
        [education.length, experience.length, projects.length, skills.length]
    );

    if (loading) {
        return <div className="grid min-h-screen place-items-center bg-slate-100 font-mono">Loading dashboard...</div>;
    }

    if (err) {
        return <div className="grid min-h-screen place-items-center bg-slate-100 p-6 text-red-600">{err}</div>;
    }

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#e0f2fe_0%,_#f8fafc_35%,_#eef2ff_100%)] font-mono">
            <Header
                links={[
                    { id: "home", label: "View Site", href: "/" },
                ]}
            />

            <main className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28">
                <section className="mb-6 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                                Dashboard API Control Panel
                            </h1>
                            <p className="mt-1 text-sm font-semibold text-slate-600">
                                Manage portfolio data with explicit actions: POST, PUT, DELETE.
                            </p>
                        </div>

                        <div className="grid min-w-[220px] grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wide">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700">
                                Total Records: {totalRecords}
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700">
                                Sections: 5
                            </div>
                            <div className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-800">
                                POST: Create
                            </div>
                            <div className="rounded-lg border border-sky-300 bg-sky-50 px-3 py-2 text-sky-800">
                                PUT: Update
                            </div>
                        </div>
                    </div>
                </section>

                <div className="space-y-5">
                    <section className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700">
                                    <User size={18} />
                                </div>
                                <h2 className="text-lg font-black text-slate-900">Profile</h2>
                            </div>
                            <ActionButton
                                label="PUT"
                                tone="update"
                                icon={<Pencil size={14} />}
                                onClick={() => setShowProfileModal(true)}
                            />
                        </div>
                        <div className="grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 sm:grid-cols-2">
                            <div><span className="font-bold">Name:</span> {profile?.name || "-"}</div>
                            <div><span className="font-bold">Email:</span> {profile?.email || "-"}</div>
                            <div className="sm:col-span-2"><span className="font-bold">Bio:</span> {profile?.bio || "-"}</div>
                        </div>
                    </section>

                    <AdminSection
                        title="Education"
                        icon={<GraduationCap size={18} />}
                        count={education.length}
                        onCreate={() => {
                            setEditingEducation(null);
                            setShowEducationModal(true);
                        }}
                        items={education}
                        renderRow={(e) => (
                            <div key={e.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">
                                    {e.institution} | {e.degree} | {e.period}
                                </div>
                                <div className="flex gap-2">
                                    <ActionButton
                                        label="PUT"
                                        tone="update"
                                        icon={<Pencil size={14} />}
                                        onClick={() => {
                                            setEditingEducation(e);
                                            setShowEducationModal(true);
                                        }}
                                    />
                                    <ActionButton
                                        label="DELETE"
                                        tone="delete"
                                        icon={<Trash2 size={14} />}
                                        onClick={() => handleDeleteEducation(e.id)}
                                    />
                                </div>
                            </div>
                        )}
                    />

                    <AdminSection
                        title="Experience"
                        icon={<Briefcase size={18} />}
                        count={experience.length}
                        onCreate={() => {
                            setEditingExperience(null);
                            setShowExperienceModal(true);
                        }}
                        items={experience}
                        renderRow={(x) => (
                            <div key={x.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">
                                    {x.company} | {x.role} | {x.time}
                                </div>
                                <div className="flex gap-2">
                                    <ActionButton
                                        label="PUT"
                                        tone="update"
                                        icon={<Pencil size={14} />}
                                        onClick={() => {
                                            setEditingExperience(x);
                                            setShowExperienceModal(true);
                                        }}
                                    />
                                    <ActionButton
                                        label="DELETE"
                                        tone="delete"
                                        icon={<Trash2 size={14} />}
                                        onClick={() => handleDeleteExperience(x.id)}
                                    />
                                </div>
                            </div>
                        )}
                    />

                    <AdminSection
                        title="Projects"
                        icon={<FolderKanban size={18} />}
                        count={projects.length}
                        onCreate={() => {
                            setEditingProject(null);
                            setShowProjectModal(true);
                        }}
                        items={projects}
                        renderRow={(p) => (
                            <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">
                                    {p.title}
                                </div>
                                <div className="flex gap-2">
                                    <ActionButton
                                        label="PUT"
                                        tone="update"
                                        icon={<Pencil size={14} />}
                                        onClick={() => {
                                            setEditingProject(p);
                                            setShowProjectModal(true);
                                        }}
                                    />
                                    <ActionButton
                                        label="DELETE"
                                        tone="delete"
                                        icon={<Trash2 size={14} />}
                                        onClick={() => handleDeleteProject(p.id)}
                                    />
                                </div>
                            </div>
                        )}
                    />

                    <AdminSection
                        title="Skills"
                        icon={<Wrench size={18} />}
                        count={skills.length}
                        onCreate={() => {
                            setEditingSkill(null);
                            setShowSkillModal(true);
                        }}
                        items={skills}
                        renderRow={(s) => (
                            <div key={s.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="text-sm font-semibold text-slate-700">{s.name}</div>
                                <div className="flex gap-2">
                                    <ActionButton
                                        label="PUT"
                                        tone="update"
                                        icon={<Pencil size={14} />}
                                        onClick={() => {
                                            setEditingSkill(s);
                                            setShowSkillModal(true);
                                        }}
                                    />
                                    <ActionButton
                                        label="DELETE"
                                        tone="delete"
                                        icon={<Trash2 size={14} />}
                                        onClick={() => handleDeleteSkill(s.id)}
                                    />
                                </div>
                            </div>
                        )}
                    />
                </div>
            </main>

            <ProfileModal
                open={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                initialData={profile}
                onSave={handleSaveProfile}
            />
            <EducationModal
                open={showEducationModal}
                onClose={() => {
                    setShowEducationModal(false);
                    setEditingEducation(null);
                }}
                initialData={editingEducation}
                onSave={handleSaveEducation}
            />
            <ExperienceModal
                open={showExperienceModal}
                onClose={() => {
                    setShowExperienceModal(false);
                    setEditingExperience(null);
                }}
                initialData={editingExperience}
                onSave={handleSaveExperience}
            />
            <ProjectModal
                open={showProjectModal}
                onClose={() => {
                    setShowProjectModal(false);
                    setEditingProject(null);
                }}
                initialData={editingProject}
                onSave={handleSaveProject}
            />
            <SkillModal
                open={showSkillModal}
                onClose={() => {
                    setShowSkillModal(false);
                    setEditingSkill(null);
                }}
                initialData={editingSkill}
                onSave={handleSaveSkill}
            />
        </div>
    );
}

export default Dashboard;
