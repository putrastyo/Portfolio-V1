import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="bg-zinc-600 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-10 w-full mx-auto mb-8 text-zinc-100">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2">
        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
        Education
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Bachelor Degree */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-4 sm:p-6 rounded-xl shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">
                Bachelor of Software Engineering Technology
              </h3>
              <div className="text-zinc-400 text-xs sm:text-sm mb-3 break-words">
                Institut Pertanian Bogor (IPB University) | 2024 - 2027
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                  <span>GPA: 3.78/4.00</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-50">Relevant Coursework:</span>
                  <ul className="list-disc list-inside ml-3 sm:ml-4 mt-1 space-y-1">
                    <li className="break-words">Data Structures & Algorithms</li>
                    <li className="break-words">Database Systems</li>
                    <li className="break-words">Software Engineering</li>
                    <li className="break-words">Computer Networks</li>
                    <li className="break-words">Web Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vocational High School */}
        <div className="bg-zinc-800/60 hover:bg-zinc-800 transition-all p-4 sm:p-6 rounded-xl shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">
                Vocational High School (Software Engineering)
              </h3>
              <div className="text-zinc-400 text-xs sm:text-sm mb-3 break-words">
                SMK Negeri 12 Jakarta | 2021 - 2024
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                  <span>Graduated with Honors</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-50">Key Focus:</span>
                  <ul className="list-disc list-inside ml-3 sm:ml-4 mt-1 space-y-1">
                    <li className="break-words">Software Engineering Fundamentals</li>
                    <li className="break-words">Web Programming (PHP, JavaScript)</li>
                    <li className="break-words">Database Design & SQL</li>
                    <li className="break-words">Internship: IT Support & Web Developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
