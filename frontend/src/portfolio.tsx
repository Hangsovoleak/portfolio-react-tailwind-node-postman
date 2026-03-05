// function Portfolio() {
//     return (
//         <div className="text-left bg-white text-slate-900 font-mono">
//             <header className="fixed top-0 left-0 right-0 border-b border-slate-300 bg-yellow-50 backdrop-blur-sm">
//                 <div className="mx-auto flex h-20 max-w-full items-center px-6">
                    
//                     <div className="text-2xl font-bold transition-colors items-center text-green-400 hover:text-green-500">
//                     Portfolio
//                     </div>

//                     <div className="ml-auto flex items-center gap-8">
//                     <nav className="hidden items-center gap-2 md:flex">
//                         <a href="#about" className="px-4 py-2 font-semibold text-slate-600 rounded-2xl hover:bg-amber-200">About Me</a>
//                         <a href="#education" className="px-4 py-2 font-semibold text-slate-600 rounded-2xl hover:bg-amber-200">Education</a>
//                         <a href="#experience" className="px-4 py-2 font-semibold text-slate-600 rounded-2xl hover:bg-amber-200">Experience</a>
//                         <a href="#projects" className="px-4 py-2 font-semibold text-slate-600 rounded-2xl hover:bg-amber-200">Projects</a>
//                         <a href="#skills" className="px-4 py-2 font-semibold text-slate-600 rounded-2xl hover:bg-amber-200">Skills</a>
//                         <a href="#contact" className="px-4 py-2 font-semibold text-slate-600 rounded-2xl hover:bg-amber-200">Contact</a>
//                     </nav>

//                     <a
//                         href="cv.pdf"
//                         download
//                         className="rounded-xl bg-sky-200 px-3 py-2 font-semibold text-slate-900 hover:bg-blue-300"
//                     >
//                         ⭳ Download CV
//                     </a>
//                     </div>
//                 </div>
//             </header>

            
//             <section id="about" className="border-b border-stale-200">
//                 <div className="mx-auto my-10 flex max-w-6xl flex-col gap-10 py-20 text-left md:flex-row md:items-center md:justify-between">
//                     <div className="flex-1">
//                         <h1 className="text-5xl font-extrabold tracking-tight mt-24">Rorn Hangsovoleak</h1>

//                         <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500 text-semibold">
//                             I am an Information Technology Engineering student with a focus on <b>Software Engineering </b>
//                             and <b>Web Development. </b> I am a highly motivated, reliable and hardworking individual seeking 
//                             a dynamic working environment with challenge to develop my skills. My ultimate career goal is to become 
//                             a fully qualified and experienced Information Technology professional.
//                         </p>

//                         <div className="mt-10 flex flex-wrap gap-4">
//                             <a className="inline-flex items-center justify-center rounded-xl border border-transparent bg-sky-200 px-6 py-3 font-semibold hover:bg-blue-300" href="#contact">
//                                 Contact Me
//                             </a>
//                             <a className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-100">
//                                 Edit Profile
//                             </a>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                         <img src="/images/profile.jpg" alt="Profile" className="h-80 w-80 rounded-full object-cover" />
//                     </div>

//                 </div>
                
//             </section>

//             <section id="education" className="border-b border-slate-200">
//                 <div className="mx-auto max-w-6xl px-6 py-20">
//                     <h2 className="text-5xl font-extrabold tracking-tight text-center">Education</h2>
//                     <div className="mt-12 max-w-4xl">
//                         <div className="py-10">
//                             <div className="text-2xl font-bold">Royal University of Phnom Penh</div>
//                             <div className="mt-2 text-lg text-slate-500">Bachelor Degree - Information Technology Engineering</div>
//                             <div className="mt-2 text-lg text-slate-400">2024 - present</div>
//                             <div className="mt-10 h-px w-full bg-slate-300"></div>
//                         </div>

//                         <div className="py-10">
//                             <div className="text-2xl font-bold">Tux Global Institute</div>
//                             <div className="mt-2 text-lg text-slate-500">Associate Degree - App / Web Development</div>
//                             <div className="mt-2 text-lg text-slate-400">2024 - present</div>
//                             <div className="mt-10 h-px w-full bg-slate-300"></div>
//                         </div>

//                         <div className="py-10">
//                             <div className="text-2xl font-bold">Pre Sihanouk High School</div>
//                             <div className="mt-2 text-lg text-slate-500">Graduated grade 9</div>
//                             <div className="mt-2 text-lg text-slate-400">2019 - 2020</div>
//                             <div className="mt-2 text-lg text-slate-500">Graduated grade 12</div>
//                             <div className="mt-2 text-lg text-slate-400">2023 - 2024</div>
//                             <div className="mt-10 h-px w-full bg-slate-300"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="experience" className="border-b border-slate-200">
//                 <div className="mx-auto max-w-6xl px-6 py-14">
//                     <h2 className="text-5xl font-extrabold tracking-tight text-center">Experience</h2>

//                     <div className="mt-12 grid gap-8 md:grid-cols-3">
//                         <div className="rounded-2xl border border-slate-300 bg-white p-8">
//                             <div className="text-2xl font-bold">Tech for kids</div>
//                             <div className="mt-2 text-base font-semibold text-slate-500">Technical</div>
//                             <div className="mt-1 text-sky-500 text-xs font-semibold">May - August 2025</div>
//                             <ul className="mt-6 list-disc pl-5 text-sm font-semibold text-slate-500 space-y-1">
//                                 <li>Setup & Configuration</li>
//                                 <li>Operation & Management</li>
//                                 <li>Troubleshooting</li>
//                                 <li>Disassembly & Reassembly</li>
//                             </ul>
//                             <div className="mt-6">
//                                 <img
//                                     src="/images/certificate.png"
//                                     alt="Certificate"
//                                     className="w-full rounded-lg border border-slate-300"
//                                 />
//                             </div>
//                         </div>

//                         <div className="rounded-2xl border border-slate-300 bg-white p-8">
//                             <div className="text-2xl font-bold">Tech for kids</div>
//                             <div className="mt-2 text-base font-semibold text-slate-500">Information Technology Support</div>
//                             <div className="mt-1 text-sky-400 text-xs font-semibold">October 2025 - Jan 2026</div>
//                             <ul className="mt-6 list-disc pl-5 text-sm font-semibold text-slate-500 space-y-1">
//                                 <li>Install, activate, and troubleshoot Windows on laptops and desktops</li>
//                                 <li>Clean and inspect hardware (RAM, battery, basic components).</li>
//                                 <li>Fix startup and system errors</li>
//                                 <li>Support basic IT issues and learning resources for students.</li>
//                             </ul>
//                             <div className="mt-6">
//                                 <img
//                                     src="/images/certificate.png"
//                                     alt="Certificate"
//                                     className="w-full rounded-lg border border-slate-300"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="projects" className="border-b border-slate-200">
//                 <div className="mx-auto max-w-6xl px-6 py-14">
//                     <h2 className="text-5xl font-extrabold tracking-tight text-center">Projects</h2>

//                     <div className="mt-10 flex flex-wrap items-center gap-4">
//                         <button className="tab-btn rounded-xl bg-slate-900 px-5 py-2 text-base font-medium text-white">All</button>
//                         <button className="tab-btn rounded-xl px-5 py-2 text-base font-medium text-slate-500 hover:text-slate-900" data-filter="HTML">HTML</button>
//                         <button className="tab-btn rounded-xl px-5 py-2 text-base font-medium text-slate-500 hover:text-slate-900" data-filter="CSS">CSS</button>
//                         <button className="tab-btn rounded-xl px-5 py-2 text-base font-medium text-slate-500 hover:text-slate-900" data-filter="JavaScript">JavaScript</button>
//                         <button className="tab-btn rounded-xl px-5 py-2 text-base font-medium text-slate-500 hover:text-slate-900" data-filter="C/C++">C/C++</button>
//                         <button className="tab-btn rounded-xl px-5 py-2 text-base font-medium text-slate-500 hover:text-slate-900" data-filter="Java">Java</button>
//                     </div>

//                     <div id="projectdetail" className="mt-10 grid gap-8 md:grid-cols-3">
//                         {/* Card */}
//                         <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white data" data-tags="React, JavaScript">
//                             <div className="h-56 w-full bg-slate-100">
//                                 <img src="/images/tictactoe.jpg" alt="TicTacToe Game" className="h-full w-full object-cover"/>
//                             </div>
//                             <div className="p-8">
//                                 <div className="text-2xl font-bold">TicTacToe Game</div>
//                                 <p className="mt-4 leading-7 text text-slate-500 text-sm font-semibold">
//                                     enjoy playing TicTacToe game with your friend. Built with HTML, CSS, and JavaScript.
//                                 </p>
//                                 <div className="mt-6 flex flex-wrap gap-3">
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">HTML</span>
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">CSS</span>
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">JavaScript</span>
//                                 </div>
//                                 <div className="mt-6 flex flex-wrap gap-3">
//                                     <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100"
//                                         href="https://github.com/Hangsovoleak/donation-ngo-project.git"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                      View Project
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white data" data-tags="React, JavaScript">
//                             <div className="h-56 w-full bg-slate-100">
//                                 <img src="https://i.pinimg.com/736x/40/53/8c/40538c3c1ebe9bb811bb625a4bbf178c.jpg" alt="Exercise Test" className="h-full w-full object-cover"/>
//                             </div>
//                             <div className="p-8">
//                                 <div className="text-2xl font-bold">Exercise Test</div>
//                                 <p className="mt-4 leading-7 text text-slate-500">
//                                     A simple exercise test web application built with HTML, CSS, and JavaScript.
//                                 </p>
//                                 <div className="mt-6 flex flex-wrap gap-3">
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">HTML</span>
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">CSS</span>
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">JavaScript</span>
//                                 </div>
//                                 <div className="mt-6 flex flex-wrap gap-3">
//                                     <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100"
//                                         href="https://github.com/Hangsovoleak/exercise-test-react.git"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                      View Project
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white data" data-tags="React, JavaScript">
//                             <div className="h-56 w-full bg-slate-100">
//                                 <img src="https://i.pinimg.com/1200x/17/6e/59/176e59544a7d5a5cf07dacb99fcaceab.jpg" alt="SuperMarket Machine" className="h-full w-full object-cover"/>
//                             </div>
//                             <div className="p-8">
//                                 <div className="text-2xl font-bold">Super Market Machine</div>
//                                 <p className="mt-4 leading-7 text text-slate-500">
//                                     A simple supermarket management system built with Java and SqlServer.
//                                 </p>
//                                 <div className="mt-6 flex flex-wrap gap-3">
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">Java</span>
//                                     <span className="rounded-full bg-fuchsia-200 px-4 py-1 text-sm font-semibold">SqlServer</span>
//                                 </div>
//                                 <div className="mt-6 flex flex-wrap gap-3">
//                                     <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100"
//                                         href="https://github.com/Hangsovoleak/market-system-java.git"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                      View Project
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-14 flex justify-center md:col-span-3">
//                             <button className="rounded-xl border border-transparent bg-amber-200 px-6 py-3 font-semibold hover:bg-amber-300">
//                                 Add More Projects
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="skills" className="border-b border-slate-200">
//                 <div className="mx-auto max-w-6xl px-6 py-20 text-center">
//                     <h2 className="text-5xl font-extrabold tracking-tight">Skills</h2>

//                     <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="h-10 w-10"/>
//                             <span className="font-semibold">HTML</span>
//                         </div>
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="h-10 w-10"/>
//                             <span className="font-semibold">CSS</span>
//                         </div>
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-10 w-10"/>
//                             <span className="font-semibold">JavaScript</span>
//                         </div>
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-10 w-10"/>
//                             <span className="font-semibold">React</span>
//                         </div>
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="/images/tailwindcss.png" alt="Tailwind CSS" className="h-10 w-10"/>
//                             <span className="font-semibold">TailwindCSS</span>
//                         </div>
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="h-10 w-10"/>
//                             <span className="font-semibold">Git</span>
//                         </div>
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="h-10 w-10"/>
//                             <span className="font-semibold">MySql</span>
//                         </div>
//                         <div className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-6 py-4 hover:bg-green-100">
//                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" className="h-10 w-10"/>
//                             <span className="font-semibold">SqlServer</span>
//                         </div>
//                     </div>

//                     <div className="mt-14 flex justify-center">
//                         <button className="rounded-xl border border-transparent bg-amber-200 px-6 py-3 font-semibold hover:bg-amber-300">
//                             Add More Skills
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             <footer id="contact" className="border-t">
//                 <div className="mx-auto max-w-5xl px-6 py-20 text-center">
//                     <h2 className="text-5xl font-extrabold tracking-tight">Contact</h2>
//                     <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
//                         I'm learning, building, and always open to new experiences. If you have a project, an opportunity, 
//                         or simply want to chat, don't hesitate to reach out.
//                     </p>
//                     <a
//                         href="mailto:hangsovoleakrorn@gmail.com"
//                         className="mt-8 inline-flex items-center justify-center text-lg font-semibold"
//                     >
//                         hangsovoleakrorn@gmail.com
//                     </a>

//                     <div className="mt-10 flex items-center justify-center gap-4">
//                         <a className="grid h-12 w-12 place-items-center rounded-full" href="hagnsovoleakrorn@gmail.com" aria-label="Email">
//                             <img src="https://cdn-icons-png.flaticon.com/512/11679/11679732.png" alt="Email" className="h-9 w-9"/>
//                         </a>
//                         <a className="grid h-12 w-12 place-items-center rounded-full" href="https://github.com/Hangsovoleak" aria-label="GitHub">
//                             <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="GitHub" className="h-9 w-9"/>
//                         </a>
//                         <a className="grid h-12 w-12 place-items-center rounded-full" href="https://www.linkedin.com/in/hangsovoleak" aria-label="LinkedIn">
//                             <img src="https://cdn-icons-png.flaticon.com/512/4138/4138130.png" alt="LinkedIn" className="h-10 w-10"/>
//                         </a>
//                     </div>

//                     <div className="mt-14 h-px w-full"></div>

//                     <div className="py-6 text-sm ">
//                         © 2026 Rorn Hangsovoleak.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default Portfolio;
