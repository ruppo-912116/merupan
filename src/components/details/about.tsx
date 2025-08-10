import {forwardRef} from "react";

const AboutSection = forwardRef<HTMLElement>((props,ref) => {
    return (
        <section
            id={"about"}
            ref={ref}
            className={"mb-16 text-slate-400 scroll-mt-16 md:mb-24 lg:md-36 lg:scroll-mt-24"}
            aria-label={"About me"}>
            <div>
                <p className={"mb-4"}>
                    I am a passionate Full Stack Web Developer with over four years of professional experience,
                    dedicated to crafting fluid, fast, and optimized web services. My expertise spans a robust tech
                    stack, including Spring Boot, Next.js, Django, Docker, and GitHub Actions, enabling me to build
                    scalable and efficient solutions.
                </p>

                <p className={"mb-4"}>
                    A significant portion of my work focuses on PDF manipulation, where I have honed my skills in
                    creating seamless document processing systems. During my 4 years and 5 months at <span
                    className={"text-slate-200"}> Sireto Technology</span>,
                    I contributed extensively to projects involving PDF solutions, CRM systems, and form
                    functionalities, alongside innovative projects within the Cardano ecosystem.
                </p>

                <p className={"mb-4"}>
                    In my spare time, I engage in activities to sharpen my cognitive abilities, such as exploring new
                    challenges and working on fun personal projects. Beyond coding, I have a deep passion for dancing
                    and immerse myself in reading books and articles on history, which fuel my curiosity and creativity.
                </p>

            </div>

        </section>
    )
});

AboutSection.displayName = "AboutSection";
export default AboutSection;