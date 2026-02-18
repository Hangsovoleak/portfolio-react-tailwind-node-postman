function SkillCard({ skill, onDelete, onEdit }) {
    const icon = skill.icon || skill.iconUrl || "";

    return (
        <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-md">
            {icon ? (
                <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white">
                    <img src={icon} alt={skill.name} className="h-7 w-7 object-contain" />
                </div>
            ) : (
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-100 text-xs font-bold text-cyan-700">
                    {skill.name?.slice(0, 2)?.toUpperCase()}
                </div>
            )}

            <span className="min-w-0 flex-1 truncate text-sm font-bold uppercase tracking-wide text-slate-700">
                {skill.name}
            </span>

            {onDelete && skill.id ? (
                <div className="ml-auto flex shrink-0 gap-2">
                    {onEdit && (
                        <button
                            type="button"
                            onClick={() => onEdit(skill)}
                            className="rounded-lg border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-cyan-700 hover:bg-cyan-100"
                        >
                            Edit
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={() => onDelete(skill.id)}
                        className="rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-rose-700 hover:bg-rose-100"
                    >
                        Remove
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default SkillCard;
