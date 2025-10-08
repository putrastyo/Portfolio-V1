export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold">Putra Setyonugroho</h1>
        <span className="text-zinc-400 text-sm">Backend & Devops | Linux & Infrastructure Enthusiast</span>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href="/cv-putra-setyonugroho.pdf"
          download
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded flex items-center"
          aria-label="Download CV"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/>
          </svg>
          Download CV
        </a>
      </div>
      <div className="flex flex-row">
        <a
          href="https://github.com/putrastyo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 px-4 rounded-l flex items-center"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/putrasetyo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center -ml-px"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
          </svg>
        </a>
        <a
          href="https://instagram.com/putrasetyo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 flex items-center -ml-px"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </a>
        <a
          href="https://twitter.com/putrasetyo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r flex items-center -ml-px"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.44 4.44 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.593 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.112A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.018c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 