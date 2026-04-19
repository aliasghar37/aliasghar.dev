import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/Footer";
import EducationSection from "@/components/sections/EducationSection";
import CertificatesSection from "@/components/sections/CertificatesSection";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <WorkSection />
                <EducationSection />
                <CertificatesSection />
            </main>
            <Footer />
        </>
    );
}
