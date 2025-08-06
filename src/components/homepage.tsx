"use client";

import {useEffect, useRef} from "react";

export default function HomePageContainer() {

    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            if (!spotlightRef.current) return;
            const x = e.clientX;
            const y = e.clientY;
            spotlightRef.current.style.background =
                `radial-gradient(circle 600px at ${x}px ${y}px, rgba(29,78,216,0.15), transparent 80%)`;
        }
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <div className="h-screen relative">
            <div
                ref={spotlightRef}
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style={{ background: "radial-gradient(circle 600px at 50% 50%, rgba(29,78,216,0.15), transparent 80%)" }}
            />
        </div>
    );
}