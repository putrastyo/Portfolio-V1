export default function ContactSection() {
  return (
    <section className="bg-zinc-600 rounded-xl shadow-lg p-8 w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white border border-zinc-500 focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white border border-zinc-500 focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white border border-zinc-500 focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
} 