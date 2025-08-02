import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white px-6 py-12 flex flex-col items-center font-sans">
      
      {/* Logo */}
      <Image src="/logo.png" alt="AI Cloudinary Logo" width={80} height={80} className="mb-6" />

      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Optimize Media with AI + Cloudinary
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
          Supercharge your media workflows using powerful AI tools and Cloudinary’s CDN.
          Resize, compress, tag, and serve optimized content automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-80 transition"
          >
            Try it Free
          </a>
          <a
            href="#features"
            className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            See Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-20 w-full max-w-4xl grid gap-10 sm:grid-cols-2">
        {[
          {
            title: "Social Media Ready",
            desc: "Automatically crop and format your photos to fit any social platform’s recommended sizes.",
          },
          {
            title: "Real-Time Optimization",
            desc: "Resize, compress, and convert formats dynamically using Cloudinary’s transformations.",
          },
          {
            title: "Global CDN Delivery",
            desc: "Serve optimized media instantly with Cloudinary’s blazing-fast CDN.",
          },
          {
            title: "Simple API Integration",
            desc: "Use our developer-friendly API or UI to automate your entire media pipeline.",
          },
        ].map(({ title, desc }) => (
          <div key={title} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-3">Simplify Your Social Media Workflow</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Automatically prep your media for every platform — no manual editing or resizing.
        </p>
        <a
          href="/signup"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
        >
          Get Started Free →
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500 dark:text-gray-400 flex gap-6 flex-wrap justify-center">
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="https://github.com/Shanidhya01" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
      </footer>
    </div>
  );
}
