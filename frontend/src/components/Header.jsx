import { TentTree } from "lucide-react";

function Header({ links = [], cvUrl = "/assets/CV.pdf" }) {
    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-100/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-20 sm:gap-6 sm:px-6">
                <div className="flex min-w-0 items-center gap-3 portfolio-animate">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 text-white shadow-lg shadow-blue-300">
                        <TentTree color="#ffffff" size={18} />
                    </div>
                    <div className="leading-tight">
                        <div className="truncate text-sm font-extrabold uppercase tracking-[0.16em] text-slate-900 sm:text-base">
                            Rorn Hangsovoleak
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-xs">
                            Software Portfolio
                        </div>
                    </div>
                </div>

                <div className="ml-auto flex items-center gap-2 sm:gap-4">
                    <nav className="hidden items-center gap-1 lg:flex">
                        {links.map((l) => (
                            <a
                                key={l.id}
                                href={l.href ? l.href : `#${l.id}`}
                                className="rounded-full border border-transparent px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-100 hover:bg-cyan-50 hover:text-slate-900"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href={cvUrl}
                        download
                        className="inline-flex rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white shadow sm:px-4 sm:text-sm"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
