/**
 * Description:
 *      Card component for an individual project.
 *      Displays project image, title, description, and tags.
 */

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Discrete card for a portfolio project.
 * 
 * @param {Object} project Project details { title, description, imageUrl, projectUrl, tags }.
 * @param {Function} onDelete Removal callback.
 * @param {Function} onEdit Edit callback.
 * @returns {JSX.Element|null} The rendered project card.
 */
function ProjectCard({ project }) {
    // Basic validation
    if (!project) return null;

    // Local configuration with fallbacks
    const image = project.image || project.imageUrl || "/assets/bg.png";
    const link = project.link || project.projectUrl || "";

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-900/20">

            {/* Visual Header: Thumbnail and Overlay */}
            <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                <img
                    src={image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="flex h-full flex-col p-5">
                <h3 className="text-xl font-black text-white">{project.title}</h3>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-200">{project.description}</p>

                {/* Tags Metadata */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {(project.tags || []).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-100"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Controls */}
                {(link || (project.id)) && (
                    <div className="mt-auto flex items-center gap-2 pt-5">
                        {link && (
                            <a
                                className="inline-flex flex-1 items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-200"
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open Project
                            </a>
                        )}

                        {/* {onDelete && project.id ? (
                            <div className="flex gap-2">
                                {onEdit && (
                                    <button
                                        type="button"
                                        onClick={() => onEdit(project)}
                                        className="rounded-lg border border-cyan-300/40 bg-cyan-500/10 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-cyan-100 hover:bg-cyan-500/20"
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => onDelete(project.id)}
                                    className="rounded-lg border border-rose-300/40 bg-rose-500/10 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-rose-100 hover:bg-rose-500/20"
                                >
                                    Remove
                                </button>
                            </div>
                        ) : null} */}
                    </div>
                )}
            </div>
        </article>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ProjectCard;
