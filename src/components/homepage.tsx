"use client";

import {useEffect, useRef, useState} from "react";
import Overview from "@/components/overview";
import DetailsContainer from "@/components/details/details-container";

export default function HomePageContainer() {

    const spotlightRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() => {

        function onMouseMove(e: MouseEvent) {
            if (!spotlightRef.current) return;
            const el = spotlightRef.current;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top + el.scrollHeight;
            spotlightRef.current.style.background =
                `radial-gradient(circle 600px at ${x}px ${y}px, rgba(29,78,216,0.15), transparent 80%)`;
        }

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);


    return (
        <div className="relative">
            <div
                ref={spotlightRef}
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style={{background: "radial-gradient(circle 600px at 50% 50%, rgba(29,78,216,0.15), transparent 80%)"}}
            />

            <div className={"mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans"}>
                <div className={"flex justify-between"}>
                    <Overview activeSection={activeSection}/>
                    <DetailsContainer setActiveSection={setActiveSection}/>
                </div>

            </div>


        </div>
    );
}