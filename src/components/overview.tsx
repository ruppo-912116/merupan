import Link from "next/link";

const Sections = ["About", "Experience", "Projects"];

export default function Overview() {

    const SocialMedias = [
        {
            name: "Github",
            link: "https://github.com/ruppo-912116",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                     className="h-6 w-6" aria-hidden="true">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                    </path>
                </svg>
        },
        {
            name: "Medium",
            link: "https://medium.com/@newruppo123",
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
            >
                <path d="M0 4.35V3.94L2.16 0h.38l3.45 6.54L9.24 0h.37l2.16 3.94v.41L9.87 8l1.9 3.65v.4l-2.16 3.95h-.38L6 9.46 3.45 16h-.38L0 12.05v-.4L1.9 8 0 4.35z" />
            </svg>
        }
    ]

    return (
        <header className={"lg:max-h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:py-24"}>
            <div>
                <h1 className={"text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"}>
                    Rupan Chaulagain
                </h1>
                <h2 className={"mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"}>
                    Full stack software developer
                </h2>
                <p className={"mt-4 max-w-xs leading-normal text-slate-400"}>
                    I craft robust, scalable, and user-focused digital solutions, seamlessly bridging frontend and
                    backend development.
                </p>

                {/* navbar part */}
                <nav className={"nav hidden lg:block mt-16"} aria-label={"In-page jump links"}>
                    {Sections.map((section) => (
                        <ul key={section} className={"w-max"}>
                            <li>
                                <Link href={`#${section.toLowerCase()}`} className={"group flex items-center py-3"}>
                                            <span
                                                className={"nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}>
                                            </span>
                                    <span
                                        className={"nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>{section}</span>
                                </Link>
                            </li>
                        </ul>
                    ))}
                </nav>
            </div>

            {/*   SOCIAL MEDIA SECTION */}
            <ul className={"ml-1 mt-12 flex items-center text-slate-400 "} aria-label={"Social Media"}>
                {
                    SocialMedias.map((social) => (
                        <li key={social.name} className={"mr-5 shrink-0 text-xs hover:text-slate-200"}>
                            <Link href={social.link} target={"_blank"} rel="noopener noreferrer"
                                  title={social.name.toLowerCase()}>
                                <span className={"sr-only"}>{social.name}</span>
                                {social.icon}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}