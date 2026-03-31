import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import FooterSection from "@/components/FooterSection";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
