import AboutSection from "@/components/details/about";
import {useEffect, useRef} from "react";

const thresholdConfig = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

export default function DetailsContainer({setActiveSection}: { setActiveSection: (section: string) => void }) {
    const sectionRef = useRef<HTMLElement>(null);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, thresholdConfig)
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
    }, []);

    return (
        <main id={"content"} className={"pt-24 lg:w-[52%] lg:py-24"}>
            <AboutSection ref={sectionRef}/>
        </main>
    )
}