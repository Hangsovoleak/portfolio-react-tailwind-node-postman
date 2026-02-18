function ExperienceCard({ item, onDelete, onEdit }) {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-900">{item.company}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-500">{item.role}</p>
                </div>

                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-700">
                    {item.time}
                </span>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {(item.bullets || []).map((b, i) => (
                    <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        <span className="font-medium leading-6">{b}</span>
                    </li>
                ))}
            </ul>

            {onDelete && item.id ? (
                <div className="mt-auto flex gap-2 pt-6">
                    {onEdit && (
                        <button
                            type="button"
                            onClick={() => onEdit(item)}
                            className="rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700 hover:bg-cyan-100"
                        >
                            Edit
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={() => onDelete(item.id)}
                        className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-rose-700 hover:bg-rose-100"
                    >
                        Remove
                    </button>
                </div>
            ) : null}
        </article>
    );
}

export default ExperienceCard;
