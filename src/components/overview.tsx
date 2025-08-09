import Link from "next/link";

const Sections = ["About", "Experience", "Projects"]

export default function Overview() {
    return (
        <header className={"flex flex-1/3"}>
            <div>
                <h1 className={"text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"}>
                    Rupan Chaulagain
                </h1>
                <h2 className={"mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"}>
                    Full stack software developer
                </h2>
                <p className={"mt-4 max-w-xs leading-normal text-slate-400"}>
                    I craft robust, scalable, and user-focused digital solutions, seamlessly bridging frontend and backend development.
                </p>

                {/* navbar part */}
                <nav className={"nav hidden lg:block mt-16"} aria-label={"In-page jump links"}>
                    {Sections.map((section) => (
                        <ul key={section} className={"w-max"}>
                            <li>
                                <Link href={`#${section.toLowerCase()}`} className={"group flex items-center py-3"}>
                                            <span className={"nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}>
                                            </span>
                                    <span className={"nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>{section}</span>
                                </Link>
                            </li>
                        </ul>
                    ))}
                </nav>
            </div>

        {/*   SOCIAL MEDIA SECTION */}
        {/*    <ul className={"ml-1 mt-8 flex items-center"} aria-label={"Social Media"}>*/}
        {/*        <li className={}>*/}

        {/*        </li>*/}
        {/*    </ul>*/}
        </header>
    )
}