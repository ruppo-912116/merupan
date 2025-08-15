import AboutSection from "@/components/details/about";
import {useCallback, useEffect, useRef} from "react";
import ExperienceSection from "@/components/details/experience";
import Projects from "@/components/details/projects";

const thresholdConfig = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
}

export default function DetailsContainer({setActiveSection}: { setActiveSection: (section: string) => void }) {
    const sectionRef = useRef<HTMLElement>(null);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
        })
    },[setActiveSection]);

    useEffect(() => {
        const element = sectionRef.current;
        const observer = new IntersectionObserver(handleIntersection, thresholdConfig);

        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [handleIntersection]);

    return (
        <main id={"content"} className={"pt-24 lg:w-[52%] lg:py-24"}>
            <AboutSection ref={sectionRef}/>
            <ExperienceSection ref={sectionRef}/>
            <Projects ref={sectionRef}/>
        </main>
    )
}