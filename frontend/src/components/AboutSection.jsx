import { House, Mail } from "lucide-react";
import TextType from "./styles/TextType";

function AboutSection({ profile, backgroundImage }) {
    if (!profile) return null;

    const sectionStyle = backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {};

    return (
        <section
            id="about"
            className="relative overflow-hidden border-b border-cyan-100 bg-cover bg-center bg-no-repeat"
            style={sectionStyle}
        >
            <div className="absolute inset-0 bg-slate-950/65" />
            <div className="absolute -left-20 top-28 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

            <div className="portfolio-animate relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-32 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-14 md:pb-20 md:pt-36">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
                        <House size={14} />
                        Personal Profile
                    </div>

                    <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
                        <TextType
                            text={[profile.name]}
                            typingSpeed={70}
                            pauseDuration={1500}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={45}
                            variableSpeedEnabled={false}
                            variableSpeedMin={60}
                            variableSpeedMax={120}
                            cursorBlinkDuration={0.55}
                        />
                    </h1>

                    <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-100 sm:text-lg">
                        {profile.bio}
                    </p>

                    {profile.email && (
                        <a
                            href={`mailto:${profile.email}`}
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                        >
                            <Mail size={16} />
                            {profile.email}
                        </a>
                    )}
                </div>

                <div className="mx-auto w-full max-w-sm">
                    <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-3 backdrop-blur">
                        <img
                            src="/assets/myProfile.jpg"
                            alt="Profile"
                            className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
