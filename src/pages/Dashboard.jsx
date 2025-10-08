import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SummaryCard from "../components/SummaryCard";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-zinc-700 text-white">
      <main className="flex-1 p-10 overflow-y-auto">
        <Topbar />
        <SummaryCard />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
} 