import { Code, Server, Cpu, Wrench } from "lucide-react";

export default function SkillsSection() {
  return (
    <section className="bg-zinc-600 rounded-2xl shadow-xl p-10 w-full mx-auto mb-8 text-zinc-100">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Cpu className="w-6 h-6 text-purple-400" />
        Skills Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Bahasa Pemrograman */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold flex items-center mb-4 text-purple-300">
            <Code className="w-5 h-5 mr-2" /> Programming Language
          </h3>
          <ul className="list-disc list-inside ml-4 text-sm text-zinc-300 space-y-1">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Go (Golang)</li>
          </ul>
        </div>

        {/* Framework / Library */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold flex items-center mb-4 text-blue-300">
            <Server className="w-5 h-5 mr-2" /> Framework / Library
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold text-zinc-50">Frontend:</span>
              <ul className="list-disc list-inside ml-4 text-zinc-300">
                <li>React</li>
                <li>Next.js</li>
                <li>Vue.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-zinc-50">Backend:</span>
              <ul className="list-disc list-inside ml-4 text-zinc-300">
                <li>Express.js</li>
                <li>NestJS</li>
                <li>Laravel</li>
                <li>FastAPI (Python)</li>
                <li>Gin, Fiber, Echo (Golang)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold flex items-center mb-4 text-green-300">
            <Wrench className="w-5 h-5 mr-2" /> Database
          </h3>
          <ul className="list-disc list-inside ml-4 text-sm text-zinc-300 space-y-1">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* Automation & DevOps */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold flex items-center mb-4 text-yellow-300">
            <Server className="w-5 h-5 mr-2" /> Automation & DevOps
          </h3>
          <ul className="list-disc list-inside ml-4 text-sm text-zinc-300 space-y-1">
            <li>Docker</li>
            <li>Nginx</li>
            <li>GitHub Actions & Gitlab CI</li>
            <li>Bash Scripting</li>
            <li>Jenkins</li>
          </ul>
        </div>

        {/* Testing & QA */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold flex items-center mb-4 text-pink-300">
            <Wrench className="w-5 h-5 mr-2" /> Testing & QA
          </h3>
          <ul className="list-disc list-inside ml-4 text-sm text-zinc-300 space-y-1">
            <li>Jest (JavaScript)</li>
            <li>PHPUnit (Laravel)</li>
            <li>Go test (Golang)</li>
            <li>Postman (API testing)</li>
            <li>OWASP ZAP, Burp Suite (security testing)</li>
          </ul>
        </div>

        {/* Bonus */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold flex items-center mb-4 text-cyan-300">
            <Code className="w-5 h-5 mr-2" /> Bonus
          </h3>
          <ul className="list-disc list-inside ml-4 text-sm text-zinc-300 space-y-1">
            <li>RESTful API Design</li>
            <li>Clean Architecture / Repository Pattern</li>
            <li>Swagger / OpenAPI</li>
            <li>CI/CD pipeline & containerized deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
