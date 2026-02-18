import SkillCard from "./SkillCard";
import { BookmarkPlus, Sparkles } from "lucide-react";

function SkillsSection({ skills = [], onAdd, onDelete, onEdit }) {
    return (
        <section id="skills" className="border-b border-cyan-100 bg-white py-20">
            <div className="portfolio-animate mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
                        <Sparkles size={14} />
                        Skills
                    </div>
                    <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Tech Stack & Tools</h2>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((s) => (
                        <SkillCard key={s.id || s.name} skill={s} onDelete={onDelete} onEdit={onEdit} />
                    ))}
                </div>

                {onAdd && (
                    <div className="mt-10 flex justify-center">
                        <button
                            type="button"
                            onClick={onAdd}
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-slate-800"
                        >
                            <BookmarkPlus size={16} />
                            Add Skill
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default SkillsSection;
