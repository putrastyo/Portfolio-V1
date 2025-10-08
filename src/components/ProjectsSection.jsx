import { FolderKanban } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="bg-zinc-600 rounded-xl shadow-lg p-8 w-full mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <FolderKanban className="w-6 h-6 text-green-400" />
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Portfolio Website */}
        <div className="bg-zinc-700 rounded-lg p-4 shadow flex flex-col">
          <h3 className="font-semibold text-lg mb-2 text-white">Portfolio Website</h3>
          <p className="text-zinc-300 mb-2">
            Personal portfolio to showcase projects, skills, and experience. Responsive and modern UI.
          </p>
          <div className="mb-2 flex items-center gap-2 flex-wrap">
            <ul className="flex flex-row flex-wrap gap-2 text-zinc-400 text-sm list-none m-0 p-0">
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">React</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">Tailwind CSS</li>
              <li>Vite</li>
            </ul>
          </div>
          <div className="flex flex-row gap-4 mt-auto">
            <a
              href="https://github.com/putrastyo/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-sm font-medium"
            >
              GitHub Repo
            </a>
            <a
              href="https://putrasetyo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm font-medium"
            >
              Live URL
            </a>
          </div>
        </div>

        {/* Diagnify - AI Symptom Checker */}
        <div className="bg-zinc-700 rounded-lg p-4 shadow flex flex-col">
          <h3 className="font-semibold text-lg mb-2 text-white">Diagnify - AI Symptom Checker</h3>
          <p className="text-zinc-300 mb-2">
            AI-powered web app for checking symptoms and getting health recommendations. Features authentication, chat, and admin dashboard.
          </p>
          <div className="mb-2 flex items-center gap-2 flex-wrap">
            <ul className="flex flex-row flex-wrap gap-2 text-zinc-400 text-sm list-none m-0 p-0">
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">React</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">Express.js</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">Python (AI)</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">MongoDB</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="flex flex-row gap-4 mt-auto">
            <a
              href="https://github.com/putrastyo/diagnify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-sm font-medium"
            >
              GitHub Repo
            </a>
            <a
              href="https://diagnify.putrasetyo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm font-medium"
            >
              Live URL
            </a>
          </div>
        </div>

        {/* Clinico - Klinik Online */}
        <div className="bg-zinc-700 rounded-lg p-4 shadow flex flex-col">
          <h3 className="font-semibold text-lg mb-2 text-white">Clinico - Online Clinic</h3>
          <p className="text-zinc-300 mb-2">
            Online clinic management system for appointments, consultations, and payments. Multi-role dashboard for doctors, patients, and staff.
          </p>
          <div className="mb-2 flex items-center gap-2 flex-wrap">
            <ul className="flex flex-row flex-wrap gap-2 text-zinc-400 text-sm list-none m-0 p-0">
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">Laravel</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">Vue.js</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">MySQL</li>
              <li>JWT Auth</li>
            </ul>
          </div>
          <div className="flex flex-row gap-4 mt-auto">
            <a
              href="https://github.com/putrastyo/clinico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-sm font-medium"
            >
              GitHub Repo
            </a>
            <a
              href="https://clinico.putrasetyo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm font-medium"
            >
              Live URL
            </a>
          </div>
        </div>

        {/* MPSOnline - School Management */}
        <div className="bg-zinc-700 rounded-lg p-4 shadow flex flex-col">
          <h3 className="font-semibold text-lg mb-2 text-white">MPSOnline - School Management</h3>
          <p className="text-zinc-300 mb-2">
            Platform for managing school operations: academics, payments, and recommendations. Microservices and multi-database architecture.
          </p>
          <div className="mb-2 flex items-center gap-2 flex-wrap">
            <ul className="flex flex-row flex-wrap gap-2 text-zinc-400 text-sm list-none m-0 p-0">
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">NestJS</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">React</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">PostgreSQL</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-['']">Redis</li>
              <li>Docker Compose</li>
            </ul>
          </div>
          <div className="flex flex-row gap-4 mt-auto">
            <a
              href="https://github.com/putrastyo/mpsonline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-sm font-medium"
            >
              GitHub Repo
            </a>
            <a
              href="https://mpsonline.putrasetyo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm font-medium"
            >
              Live URL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 