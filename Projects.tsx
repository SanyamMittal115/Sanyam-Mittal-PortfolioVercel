import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Calorie Tracker",
    description:
      "A calorie tracker using Streamlit + Python which demonstrates data manipulation skills by merging CSV and JSON data with Streamlit functions for an intuitive user interface.",
    image:
      "https://images.unsplash.com/photo-1711698520626-bae97bc6c204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxvcmllJTIwdHJhY2tpbmclMjBudXRyaXRpb24lMjBhcHB8ZW58MXx8fHwxNzY4MTM1MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Streamlit", "CSV", "JSON", "Data Visualization"],
    github: "https://github.com/SanyamMittal115",
    demo: "https://sanyam-mittal-calorie-tracker-2jmyqcfqhah2qkmzribyez.streamlit.app/",
  },
  {
    title: "Videogame Analytics Engine",
    description:
      "An API-based tool built with Streamlit that can be used to play games, get game support, and receive recommendations through Gemini and ChatGPT integration.",
    image:
      "https://images.unsplash.com/photo-1646708198974-4c4893e8a2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2ODEzNTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "GenAI", "API", "Streamlit", "Gemini", "ChatGPT"],
    github: "https://github.com/SanyamMittal115",
    demo: "https://sanyam-mittal-videogame-support-ggcjozgxpqenzavhthd9ug.streamlit.app/",
  },
  {
    title: "Resume Analysis Tool",
    description:
      "A Hugging Face AI tool/agent that analyzes resumes through classification, summarization, and NER-based models to determine job fit and provide actionable insights.",
    image:
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjBkb2N1bWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgxMzUwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Hugging Face", "AI/ML", "Streamlit", "NLP", "Classification"],
    github: "https://github.com/SanyamMittal115",
    demo: "https://huggingface.co/spaces/Sunny115/resume_analysis_tool",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl mb-6 text-center">Featured Projects</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            AI-powered applications demonstrating technical expertise and innovation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <div className="relative overflow-hidden group">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white rounded-full hover:bg-slate-100 transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-slate-900" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white rounded-full hover:bg-slate-100 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-900" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/SanyamMittal115", "_blank")}
            >
              View All on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}