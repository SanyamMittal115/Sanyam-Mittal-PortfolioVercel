import { motion } from "motion/react";
import {
  Code2,
  Database,
  FileSpreadsheet,
  Brain,
  Languages,
  Sparkles,
  Mic,
  Users,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Python",
    description: "Advanced programming with focus on AI/ML applications",
    color: "bg-blue-500",
  },
  {
    icon: Sparkles,
    title: "Streamlit",
    description: "Building interactive data applications and dashboards",
    color: "bg-red-500",
  },
  {
    icon: Brain,
    title: "AI / ML",
    description: "Machine learning, GenAI, Hugging Face libraries",
    color: "bg-purple-500",
  },
  {
    icon: Database,
    title: "SQL",
    description: "Database design, queries, and data management",
    color: "bg-green-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel",
    description: "Data analysis, modeling, and business analytics",
    color: "bg-emerald-500",
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Integrating RESTful APIs",
    color: "bg-orange-500",
  },
  {
    icon: Languages,
    title: "Bilingual",
    description: "Hindi & English fluency for global collaboration",
    color: "bg-cyan-500",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Leadership, presentations, and communication",
    color: "bg-pink-500",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl mb-6 text-center">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Technical skills and leadership capabilities for building innovative AI solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div
                  className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2">{skill.title}</h3>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}