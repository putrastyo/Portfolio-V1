import { Cpu } from "lucide-react";

const techStacks = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "ShadCN", logo: "https://ui.shadcn.com/favicon.ico" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Golang", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "RabbitMQ", logo: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Bun", logo: "https://bun.sh/logo@2x.png" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

export default function SkillsSection() {
  return (
    <section className="bg-zinc-600 rounded-2xl shadow-xl p-10 w-full mx-auto mb-8 text-zinc-100">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Cpu className="w-6 h-6 text-purple-400" />
        Skills Overview
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
        {techStacks.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center group hover:scale-110 transition-transform"
            title={tech.name}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <p className="text-xs mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
