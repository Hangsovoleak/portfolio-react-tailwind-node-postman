/**
 * Description:
 *      Project showcase section with category filtering.
 *      Displays a grid of ProjectCard components based on selected tags.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const FILTERS = ["All", "HTML", "CSS", "JavaScript", "C/C++", "Java"];

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Filterable project gallery section.
 * 
 * @param {Array} projects List of all projects.
 * @param {Function} onAdd Callback for adding projects.
 * @param {Function} onDelete Callback for deleting projects.
 * @param {Function} onEdit Callback for editing projects.
 * @returns {JSX.Element} The rendered projects section.
 */
function ProjectsSection({ projects = [] }) {
    // State management for active category filter
    const [activeFilter, setActiveFilter] = useState("All");

    // Memoized filtering logic
    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;
        return projects.filter((project) => (project.tags || []).includes(activeFilter));
    }, [projects, activeFilter]);

    return (
        <section id="projects" className="border-b border-cyan-100 bg-slate-950 py-20 text-white">
            <div className="portfolio-animate relative mx-auto max-w-7xl px-6">

                {/* Section Title and Badge */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/40 bg-rose-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-rose-200">
                        <FolderGit2 size={14} />
                        Projects
                    </div>
                    <h2 className="mt-4 text-3xl font-black sm:text-4xl">Project Builds</h2>
                </div>

                {/* Filter Navigation */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    {FILTERS.map((label) => (
                        <button
                            key={label}
                            onClick={() => setActiveFilter(label)}
                            className={
                                label === activeFilter
                                    ? "rounded-full border border-white/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-900"
                                    : "rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-200 hover:bg-white/10"
                            }
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id || project.title}
                            project={project}
                        />
                    ))}
                </div>

                {/* Admin Controls
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
                )} */}
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ProjectsSection;
