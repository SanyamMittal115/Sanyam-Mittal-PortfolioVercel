import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4">Sanyam (Sunny) Mittal</h3>
            <p className="text-slate-400">
              AI Strategist and public speaker specializing in building innovative 
              AI solutions that turn ideas into forward-looking innovations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Sanyam115"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanyam-mittal-"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:smittal303@gatech.edu"
                className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">smittal303@gatech.edu</p>
            <p className="text-slate-400 text-sm">Atlanta, GA</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Sanyam (Sunny) Mittal. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}