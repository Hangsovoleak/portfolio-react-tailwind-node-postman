import { GraduationCap } from "lucide-react";

const SCHOOL_LOGOS = {
    "Royal University of Phnom Penh": "https://upload.wikimedia.org/wikipedia/km/e/ee/Rupp_logo.png",
    "Tux Global Institute": "https://www.tuxglobalinstitute.edu.kh/logo.png",
    "Pres Sihanouk High School": "",
    "Pre Sihanouk High School": "",
};

function EducationSection({ items = [], onAdd, onDelete, onEdit }) {
    return (
        <section id="education" className="relative border-b border-cyan-100 bg-white/60 py-20">
            <div className="portfolio-animate mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-700">
                        <GraduationCap size={14} />
                        Education
                    </div>
                    <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                        Academic Journey
                    </h2>
                </div>

                <div className="relative mx-auto mt-10 max-w-4xl">
                    <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-cyan-200 via-slate-200 to-transparent sm:block" />

                    <div className="space-y-6">
                        {items.map((e, idx) => (
                            <article key={e.id || idx} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:pl-12">
                                <div className="absolute left-3 top-7 hidden h-4 w-4 rounded-full border-2 border-white bg-cyan-500 shadow sm:block" />

                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        {SCHOOL_LOGOS[e.institution] ? (
                                            <img
                                                src={SCHOOL_LOGOS[e.institution]}
                                                alt={`${e.institution} logo`}
                                                className="h-10 w-10 rounded-lg object-contain"
                                            />
                                        ) : null}
                                        <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">{e.institution}</h3>
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                                        {e.period}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm font-semibold text-slate-700 sm:text-base">{e.degree}</p>

                                {(onEdit || onDelete) && (
                                    <div className="mt-4 flex gap-4">
                                        {onEdit && (
                                            <button
                                                onClick={() => onEdit(e)}
                                                className="text-xs font-bold uppercase tracking-wide text-cyan-700 hover:text-cyan-900"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        {onDelete && (
                                            <button
                                                onClick={() => onDelete(e.id)}
                                                className="text-xs font-bold uppercase tracking-wide text-rose-600 hover:text-rose-700"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>

                {onAdd && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={onAdd}
                            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-slate-800"
                        >
                            Add Education
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default EducationSection;
