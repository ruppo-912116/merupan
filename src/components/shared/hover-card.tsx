import React, {forwardRef, JSX} from "react";

type ElementTag = keyof JSX.IntrinsicElements;

type HoverCardProps<T extends ElementTag = "div"> = {
    /** extra classes for the outer wrapper (e.g., grid cols, gaps) */
    className?: string;
    /** tailwind for the overlay if you want to tweak */
    overlayClassName?: string;
    /** controls the overlay inset; defaults match your previous card */
    insetClassName?: string;
    /** children you want inside the card */
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

/**
 * Reusable hoverable wrapper with background overlay + opacity choreography.
 * Put it inside a parent with `group/list` if you want sibling dimming.
 */
export const HoverCard = forwardRef<
    HTMLDivElement,
    HoverCardProps
>(({ className = "", overlayClassName = "", insetClassName = "", children, ...rest }, ref) => {
    const outer = [
        // base
        "group relative transition-all",
        // match your old layout defaults; caller can override/extend via className
        "grid pb-1",
        // the “highlight this, dim siblings” behavior
        "lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const overlay = [
        "absolute z-0 hidden rounded-md transition motion-reduce:transition-none",
        // original inset behavior
        "-inset-x-4 -inset-y-4 lg:-inset-x-6",
        // only show overlay at lg+ to match your original
        "lg:block",
        // hover visual styles
        "lg:group-hover:bg-slate-800/50",
        "lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]",
        "lg:group-hover:drop-shadow-lg",
        insetClassName,
        overlayClassName,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div ref={ref} className={outer} {...rest}>
            {/* hover background */}
            <div className={overlay} aria-hidden="true"/>
            {/* content sits above overlay */}
            <div className="z-10 w-full">{children}</div>
        </div>
    );
});

HoverCard.displayName = "HoverCard";
