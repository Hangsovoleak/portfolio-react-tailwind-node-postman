/**
 * Description:
 *      Container section for professional work experience cards.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import ExperienceCard from "./ExperienceCard";
import { Flame } from "lucide-react";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief List component for professional experience entries.
 * 
 * @param {Array} items List of experience objects.
 * @param {Function} onAdd Callback to open the add experience interface.
 * @param {Function} onDelete Callback to handle experience deletion.
 * @param {Function} onEdit Callback to handle experience editing.
 * @returns {JSX.Element} The rendered experience section.
 */
function ExperienceSection({ items = [] }) {
    return (
        <section id="experience" className="border-b border-cyan-100 bg-gradient-to-b from-cyan-50/60 to-white py-20">
            <div className="portfolio-animate mx-auto max-w-6xl px-6">

                {/* Section Branding */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-700">
                        <Flame size={14} />
                        Experience
                    </div>
                    <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Volunteer Experience</h2>
                </div>

                {/* Experience Cards Grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((experience, idx) => (
                        <ExperienceCard
                            key={experience.id || idx}
                            item={experience}
                        />
                    ))}
                </div>

                {/* Administrative Actions */}
                {/* {onAdd && (
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
                )} */}
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ExperienceSection;
