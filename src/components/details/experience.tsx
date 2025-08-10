import {forwardRef} from "react";
import Link from "next/link";

// Optional: add a url per experience if you want the company name to be clickable
type Experience = {
    date: string;
    position: string;
    company: string;
    desc: string;
    technologies: string[];
    url: string;
};

const Experiences: Experience[] = [
    {
        date: "April 2022 - August 2025",
        position: "Senior software developer",
        company: "Sireto",
        url: "https://sireto.com",
        desc: `Build and maintain the backend and frontend for Anonymize Pro, a PDF anonymization
                platform. Design architecture, implement, and optimize containerization with Docker, and
                configure GitHub Actions for CI/CD. Collaborate across development stages to ensure
                performance, scalability, and deployment efficiency. Furthermore, I was also involved with developing Cardano
                Mempool`,
        technologies: ["Nextjs", "Spring Boot", "postgres", "openfga", "keycloak", "Docker", "cardano"],
    },
    {
        date: "April 2021 - April 2022",
        position: "Associate software developer",
        company: "Sireto",
        url: "https://sireto.com",
        desc: `Develop and maintain features for a delegation tracker in the Cardano ecosystem, 
                enabling real-time tracking of stake and delegation pool data. Design and implement 
                a Microsoft SharePoint UI for PDF editing, ensuring an intuitive user experience 
                and seamless document workflows.`,
        technologies: ["Nextjs", "Spring Boot", "Microsoft sharepoint", "nodejs", "Graphql"],
    },
    {
        date: "Nov 2019 - Dec 2019",
        position: "Apprenticeship",
        company: "Sireto",
        url: "https://sireto.com",
        desc: `Design and implement Cardano mempool functionalities, including a UI for 
                listing all pools in the Cardano ecosystem and displaying detailed pool data in a timeline view. 
                Collaborate on backend integration to ensure accurate, real-time blockchain data representation.`,
        technologies: ["Reactjs"],
    },
    {
        date: "Nov 2017 - Sep 2019",
        position: "Part time software developer",
        company: "Sireto",
        url: "https://sireto.com",
        desc: `Contribute to diverse projects, including developing an OpenWRT-based router application for 
                shared Wi-Fi services, building a blockchain wallet for Ethereum, and implementing intrusion detection systems 
                at both network and application layers. Design and train intrusion detection models, leveraging NGINX logs for 
                application-layer threat analysis.`,
        technologies: ["openwrt", "React native", "ethereum", "nginx"],
    },
];

function ExperienceItem({exp}: { exp: Experience }) {


    const LinkIcon = <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
        />
    </svg>


    return (
        <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* hover background */}
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"/>
                {/* date */}
                <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={`${exp.date}`}
                >
                    {exp.date}
                </header>

                {/* content */}
                <div className="z-10 sm:col-span-6">
                    {/* title */}
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <Link
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={exp.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${exp.position} at ${exp.company}`}
                            >
                                    <span
                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                <span>{exp.position} ▪&nbsp;</span>
                                <span className="inline-block">
                                        {exp.company}
                                    {LinkIcon}
                                    </span>
                            </Link>
                        </div>
                    </h3>

                    {/* description */}
                    <p className="mt-2 text-sm leading-normal text-slate-400">{exp.desc}</p>

                    {/* tech pills */}
                    {exp.technologies?.length > 0 && (
                        <ul className="mt-2 flex flex-wrap" aria-label="technologies used">
                            {exp.technologies.map((tech) => (
                                <li key={tech} className="mr-1.5 mt-2">
                                    <div
                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                        {tech}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </li>
    );
}

const ExperienceSection = forwardRef<HTMLElement>(function ExperienceSection(_, ref) {
    return (
        <section id="experience" ref={ref}>
            <ol className="group/list">
                {Experiences.map((exp) => (
                    <ExperienceItem
                        key={`${exp.company}-${exp.position}-${exp.date}`}
                        exp={exp}
                    />
                ))}
            </ol>
        </section>
    );
});

export default ExperienceSection;
