import ExperienceCard from "./ExperienceCard";
import { BookmarkPlus, Flame } from "lucide-react";

function ExperienceSection({ items = [], onAdd, onDelete, onEdit }) {
    return (
        <section id="experience" className="border-b border-cyan-100 bg-gradient-to-b from-cyan-50/60 to-white py-20">
            <div className="portfolio-animate mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-700">
                        <Flame size={14} />
                        Experience
                    </div>
                    <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Professional Work</h2>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((x, i) => (
                        <ExperienceCard key={x.id || i} item={x} onDelete={onDelete} onEdit={onEdit} />
                    ))}
                </div>

                {onAdd && (
                    <div className="mt-12 flex justify-center">
                        <button
                            type="button"
                            onClick={onAdd}
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-slate-800"
                        >
                            <BookmarkPlus size={16} />
                            Add Experience
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ExperienceSection;
