import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl mb-16 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763568258143-904ea924ac53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBjb2Rpbmd8ZW58MXx8fHwxNzY3OTkxMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Technology"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                Hello, I'm Sanyam (Sunny) Mittal, an AI strategist and public speaker 
                specializing in the design and analysis of coding projects that turn ideas 
                into forward-looking innovations. Combining Python expertise with leadership 
                and management experience, I improve pre-existing solutions while developing 
                new AI products aligned with real consumer needs.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Currently pursuing my B.S. in Business Administration with a concentration 
                in Information Technology Management at Georgia Institute of Technology, 
                I'm passionate about bridging the gap between technical innovation and 
                business strategy.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-4xl text-blue-600 mb-2">📍</div>
                  <div className="text-slate-600">Atlanta, GA</div>
                </div>
                <div>
                  <div className="text-4xl text-blue-600 mb-2">💼</div>
                  <div className="text-slate-600">Aspiring SolEng/PM/AI</div>
                </div>
                <div>
                  <div className="text-4xl text-blue-600 mb-2">4.0</div>
                  <div className="text-slate-600">GPA</div>
                </div>
                <div>
                  <div className="text-4xl text-blue-600 mb-2">🌱</div>
                  <div className="text-slate-600">Always Learning</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}