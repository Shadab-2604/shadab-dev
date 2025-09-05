import React from 'react';
import { ArrowRight, Download, Database, Server, Cloud } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const handleDownloadCV = () => {
    const cvUrl = "/ShaikhShadab.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Shaikh_Shadab_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Database
          className="absolute top-1/4 left-10 w-16 h-16 text-blue-400 dark:text-blue-600 opacity-30 animate-float"
          strokeWidth={1}
        />
        <Server
          className="absolute top-1/3 right-20 w-20 h-20 text-green-400 dark:text-green-600 opacity-20 animate-float delay-200"
          strokeWidth={1}
        />
        <Cloud
          className="absolute bottom-20 left-1/4 w-24 h-24 text-purple-400 dark:text-purple-600 opacity-25 animate-float delay-300"
          strokeWidth={1}
        />

        {/* Binary Code Animation */}
        <div className="absolute top-40 right-10 opacity-10 dark:opacity-5 text-2xl font-mono whitespace-nowrap animate-scroll">
          01101000 01101001 00100000 01001001 00100111 01101101 00100000 01010011 01101000 01100001 01100100 01100001 01100010
        </div>

        {/* Gradient Blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-radial-gradient from-indigo-400 to-transparent rounded-full filter blur-3xl opacity-10 dark:opacity-5" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-radial-gradient from-blue-300 to-transparent rounded-full filter blur-3xl opacity-10 dark:opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Shaikh Shadab</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-indigo-500 dark:text-indigo-400 mb-6">
            Full-Stack MERN Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Skilled in MongoDB, Express.js, React.js, and Node.js, building web apps, APIs, and backend systems with strong problem-solving and teamwork skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </a>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Download CV
              <Download className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 rounded-3xl border-2 border-gray-400 dark:border-gray-600 flex items-center justify-start p-1">
          <div className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-scroll-wheel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;