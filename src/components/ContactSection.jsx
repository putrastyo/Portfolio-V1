export default function ContactSection() {
  return (
    <section className="bg-zinc-600 rounded-xl shadow-lg p-8 w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">Get in touch with me</h2>
      <p className="text-zinc-200 text-lg mb-2">
        Feel free to reach out via email:
      </p>
      <a
        href="mailto:hello@ayuwoki.my.id"
        className="text-blue-400 hover:underline text-lg font-medium break-all"
      >
        hello@ayuwoki.my.id
      </a>
    </section>
  );
}