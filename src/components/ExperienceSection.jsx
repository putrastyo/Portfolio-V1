import { Briefcase } from "lucide-react";

/**
 * Experience dibagi 2 kolom: Work dan Freelance Client
 * 
 * Format:
 * - Nama Instansi / PT
 * - Deskripsi Projek / Pekerjaan
 * - Poin pekerjaan/detail kontribusi
 * - Tanggal mulai & selesai
 */

 // WORK EXPERIENCE
export const workExperience = [
  {
    name: "PUSTIKOM UNJ",
    project: "Internship Web Developer",
    description: "Mengembangkan dan memelihara aplikasi internal untuk pengelolaan data kampus.",
    details: [
      "Merancang dan mengimplementasikan form input dan modul laporan berbasis web.",
      "Integrasi API untuk sinkronisasi data akademik.",
      "Meningkatkan efisiensi dan keamanan aplikasi internal kampus."
    ],
    date: "Feb 2023 – Jun 2023"
  },
  {
    name: "Dosdev",
    project: "Fullstack Developer",
    description: "Pengembangan beberapa aplikasi berbasis web untuk kebutuhan internal dan eksternal klien.",
    details: [
      "Membangun RESTful API backend menggunakan Node.js dan Laravel.",
      "Membuat frontend interaktif dengan React.",
      "Deploy aplikasi ke VPS dengan workflow CI/CD."
    ],
    date: "Sep 2023 – Feb 2024"
  }
];

 // FREELANCE CLIENTS
export const freelanceClients = [
  {
    name: "PT Gianira Digital Solusi",
    project: "Website Company Profile",
    description: "Pembuatan company profile interaktif untuk meningkatkan kredibilitas perusahaan.",
    details: [
      "Analisa kebutuhan klien dan penyusunan wireframe.",
      "Implementasi desain responsif dengan React & Tailwind.",
      "Optimasi SEO dasar."
    ],
    date: "Mar 2024 – May 2024"
  },
  {
    name: "Noonajib",
    project: "Aplikasi Marketplace Fashion",
    description: "Platform marketplace produk fashion dengan dashboard admin dan sistem pembayaran digital.",
    details: [
      "Pengembangan backend dengan Laravel dan MySQL.",
      "Integrasi API pembayaran (Midtrans).",
      "Implementasi manajemen inventaris produk."
    ],
    date: "Jun 2023 – Dec 2023"
  },
  {
    name: "Felice",
    project: "Website Portfolio & E-Commerce",
    description: "Website personal untuk penjualan produk handmade, portofolio, dan pemesanan online.",
    details: [
      "Setup halaman showcase produk serta checkout sederhana.",
      "Migrasi data dari platform lama ke sistem baru.",
      "Pelatihan penggunaan dashboard produk kepada pemilik bisnis."
    ],
    date: "Jan 2024 – Mar 2024"
  },
  {
    name: "Clinico",
    project: "Aplikasi Klinik Online (Malaysia)",
    description: "Sistem manajemen klinik online untuk appointment, konsultasi, & pembayaran dokter.",
    details: [
      "Dashboard untuk admin, dokter, pasien, dan staf.",
      "Fitur konsultasi online dan pencatatan rekam medis.",
      "Integrasi layanan notifikasi WhatsApp."
    ],
    date: "Jan 2025 – Jun 2025"
  },
  {
    name: "Semudah",
    project: "Sistem Reservasi Jasa Online",
    description: "Platfom reservasi jasa dengan manajemen jadwal dan pelaporan transaksi.",
    details: [
      "Pengembangan sistem backend dan frontend terintegrasi.",
      "Implementasi login OTP dan manajemen jadwal dinamis.",
      "Pembuatan dashboard analitik transaksi."
    ],
    date: "Jul 2023 – Sep 2023"
  }
];

export default function ExperienceSection() {
  return (
    <section className="bg-zinc-600 rounded-xl shadow-lg p-8 w-full mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Briefcase className="w-6 h-6 text-green-400" />
        Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Work Experience */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">Work</h3>

          {/* Internship at PUSTIKOM UNJ */}
          <div className="mb-6">
            <div className="font-semibold text-lg text-white">Internship - PUSTIKOM UNJ</div>
            <div className="text-zinc-400 text-sm mb-2">
              Intern Management System | Feb 2024 – Jun 2024
            </div>
            <ul className="list-disc list-inside text-zinc-300 ml-4 space-y-1">
              <li>Developed a web-based management system for internship tracking and evaluation.</li>
              <li>Collaborated with staff to automate reporting, submissions, and notifications.</li>
              <li>Implemented authentication, multi-role dashboard, and data migration.</li>
            </ul>
          </div>

          {/* Dosdev Agency */}
          <div>
            <div className="font-semibold text-lg text-white">Web Developer - Dosdev Agency</div>
            <div className="text-zinc-400 text-sm mb-2">
              Website Development Agency | Mar 2023 – Present
            </div>
            <ul className="list-disc list-inside text-zinc-300 ml-4 space-y-1">
              <li>Delivered custom website and system development for diverse clients.</li>
              <li>Notable clients: 
                <ul className="list-disc ml-5">
                  <li><span className="font-medium">Clinico:</span> Developed online clinic management platform (appointment, consultations, and payment features) for Malaysia.</li>
                  <li><span className="font-medium">Noonajib:</span> Built restaurant website with product management, booking, and admin dashboard (Bali).</li>
                  <li><span className="font-medium">Felice:</span> Launched e-commerce and portfolio site with product showcase and ordering.</li>
                </ul>
              </li>
              <li>Responsible for both backend and frontend implementation, deploying, and client training.</li>
            </ul>
          </div>
        </div>

        {/* Freelance Experience */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">Freelance</h3>

          {/* MPSOnline */}
          <div>
            <div className="font-semibold text-lg text-white">Fullstack & DevOps Engineer</div>
            <div className="text-zinc-400 text-sm mb-2">
              MPSOnline – School Management Platform (Malaysia) | Aug 2024 – Jan 2025
            </div>
            <ul className="list-disc list-inside text-zinc-300 ml-4 space-y-1">
              <li>Developed a multi-service school management platform (academics, payments, recommendations, etc).</li>
              <li>Implemented microservice architecture and integrated with 5 databases.</li>
              <li>Handled cloud deployment, optimized CI/CD pipeline, and infrastructure operations.</li>
              <li>Integrated payment gateway and AI-based recommendation features.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}