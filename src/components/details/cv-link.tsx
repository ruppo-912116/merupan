import Link from "next/link";
import LinkIcon from "@/components/icons/link-icon";

export default function CVLink() {
    return (
        <div className={"mt-12"}>
            <Link
                target={"_blank"}

                className={"inline-flex items-baseline leading-tight font-semibold text-slate-200 group/link hover:text-teal-300 focus-visible:text-teal-300 text-base"}
                href={"/cv.pdf"}>
                <span>View Full <span className={"inline-block"}>Résumé <LinkIcon/></span></span>
            </Link>
        </div>
    )
}