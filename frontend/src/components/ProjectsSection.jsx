import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { BookmarkPlus, FolderGit2 } from "lucide-react";

const FILTERS = ["All", "HTML", "CSS", "JavaScript", "C/C++", "Algorithm", "Java", "IoT"];

function ProjectsSection({ projects = [], onAdd, onDelete, onEdit }) {
    const [filter, setFilter] = useState("All");

    const filtered = useMemo(() => {
        if (filter === "All") return projects;
        return projects.filter((p) => (p.tags || []).includes(filter));
    }, [projects, filter]);

    return (
        <section id="projects" className="border-b border-cyan-100 bg-slate-950 py-20 text-white">
            <div className="portfolio-animate mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/40 bg-rose-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-rose-200">
                        <FolderGit2 size={14} />
                        Projects
                    </div>
                    <h2 className="mt-4 text-3xl font-black sm:text-4xl">Selected Builds</h2>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={
                                f === filter
                                    ? "rounded-full border border-white/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-900"
                                    : "rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-200 hover:bg-white/10"
                            }
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((p) => (
                        <ProjectCard key={p.id || p.title} project={p} onDelete={onDelete} onEdit={onEdit} />
                    ))}
                </div>

                {onAdd && (
                    <div className="mt-10 flex justify-center">
                        <button
                            type="button"
                            onClick={onAdd}
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-200"
                        >
                            <BookmarkPlus size={16} />
                            Add Project
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectsSection;
