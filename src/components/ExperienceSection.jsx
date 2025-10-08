import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="bg-zinc-600 rounded-xl shadow-lg p-8 w-full mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Briefcase className="w-6 h-6 text-green-400" />
        Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Diagnify */}
        <div>
          <div className="font-semibold text-lg text-white">Backend & DevOps Engineer</div>
          <div className="text-zinc-400 text-sm mb-2">
            Diagnify – AI Symptom Checker | Jun 2025 – Aug 2025
          </div>
          <ul className="list-disc list-inside text-zinc-300 ml-4 space-y-1">
            <li>Designed and implemented microservices architecture with 2 backend services and 1 React frontend.</li>
            <li>Containerized services using Docker and orchestrated locally with Docker Compose.</li>
            <li>Deployed to VPS with Nginx reverse proxy and SSL/TLS (Let’s Encrypt).</li>
            <li>Implemented CI/CD using GitHub Actions and managed environment configurations.</li>
          </ul>
        </div>

        {/* Clinico */}
        <div>
          <div className="font-semibold text-lg text-white">Backend Developer</div>
          <div className="text-zinc-400 text-sm mb-2">
            Clinico – Aplikasi Klinik Online, Malaysia | Jan 2025 – Jun 2025
          </div>
          <ul className="list-disc list-inside text-zinc-300 ml-4 space-y-1">
            <li>Developed clinic management system with appointment, consultation, and payment features.</li>
            <li>Built dashboard for 4 user roles: superadmin, doctor, patient, and staff.</li>
            <li>Implemented health calculation (BMI, calories) and nearby clinic search using geolocation.</li>
            <li>Applied layered architecture, JWT authorization, and endpoint security middleware.</li>
          </ul>
        </div>

        {/* MPSOnline */}
        <div>
          <div className="font-semibold text-lg text-white">Fullstack & DevOps Engineer</div>
          <div className="text-zinc-400 text-sm mb-2">
            MPSOnline – Manajemen Persekolahan Online, Malaysia | Aug 2024 – Jan 2025
          </div>
          <ul className="list-disc list-inside text-zinc-300 ml-4 space-y-1">
            <li>Developed a school management platform with 9 services, 5 databases, and 2 frontend apps.</li>
            <li>Implemented microservice architecture for authentication, academics, and payments.</li>
            <li>Integrated AI-based recommendation engine and payment gateway (RazorPay).</li>
            <li>Contributed to deployment, cloud hosting, and CI/CD process optimization.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}