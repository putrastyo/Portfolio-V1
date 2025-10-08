export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-800 p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4 border-4 border-blue-600"
        />
        <div className="text-center">
          <div className="text-lg font-semibold">John Doe</div>
          <div className="text-sm text-zinc-400">Administrator</div>
        </div>
      </div>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">About Me</a>
        <a href="#" className="hover:text-blue-400">Projects</a>
        <a href="#" className="hover:text-blue-400">Skills</a>
        <a href="#" className="hover:text-blue-400">Experience</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
      </nav>
      <div className="mt-auto pt-8 border-t border-zinc-700 text-center text-xs text-zinc-500">
        &copy; 2024 John Doe. All rights reserved.
      </div>
    </aside>
  );
} 