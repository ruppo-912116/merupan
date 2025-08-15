import {forwardRef} from "react";
import {HoverCard} from "@/components/shared/hover-card";
import Link from "next/link";
import LinkIcon from "@/components/icons/link-icon";

const ProjectsList = [
    {
        name: "Better Collected",
        desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
        an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        name: "Anonymize Pro",
        desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
        an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        name: "Cardano Mempool",
        desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
        an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        name: "Intrusion detection system in IoT devices",
        desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
        an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        name: "Blockchain Wallet using SRAM PUF",
        desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
        an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
]

const Projects = forwardRef<HTMLElement>(function ProjectsSection(_, ref) {
    return (
        <section
            id={"projects"}
            ref={ref}
            aria-label={"Selected Projects"}
            className={"mb-16 mt-24 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"}
        >
            <div
                className={"sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"}
            >
                <h2 className={"text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"}>
                    Projects
                </h2>
            </div>

            <div>
                <ul className={"group/list"}>
                    {ProjectsList.map(project => (
                        <li key={project.name} className={"mb-12"}>
                            <HoverCard>
                                <div className={"z-10 sm:order-2 sm:col-span-6"}>
                                    <h3>
                                        <Link
                                            href={"/"}
                                            target={"_blank"}
                                            rel={"noreferrer noopener"}
                                            aria-label={"Build a spotify app"}
                                            className={"inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"}>
                                    <span
                                        className={"absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"}></span>
                                            <span>{project.name}<span className={"inline-block"}>App<LinkIcon/></span>
                                    </span>
                                        </Link>
                                    </h3>

                                    {/* DESCRIPTION SECTION */}
                                    <p className={"mt-2 text-sm leading-normal text-slate-400"}>{project.desc}</p>

                                </div>
                            </HoverCard>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
})

export default Projects;