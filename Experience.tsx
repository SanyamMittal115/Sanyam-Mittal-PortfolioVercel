import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Bachelor of Science in Business Administration",
    company: "Georgia Institute of Technology, Scheller College of Business",
    period: "2025 – Present",
    location: "Atlanta, Georgia",
    description:
      "Concentration: Information Technology Management • Minor: Information Systems and Computing",
    achievements: [
      "GPA: 4.0",
      "Relevant Coursework: Intro to Computing (Python), Accounting 1, Management Statistics",
    ],
  },
  {
    type: "education",
    title: "AI in Business Course",
    company: "University of Pennslyvania (asynchronous)",
    period: "June 2025 – Aug 2025",
    location: "Bothell, Washington",
    description:
      "Applied AI/ML, Hands-on with Google Cloud to prototype mini-AI models through various use cases of testing",
    achievements: [
      "Explored Machine Learning principles in HRM and Marketing",
      "Ensured data privacy and transparency in AI systems",
    ],
  },
  {
    type: "work",
    title: "ECL Intern / Marketing / Outreach",
    company: "Everett Carrer Link (Mill Creek Chamber of Commerce / Allstate Insurance)",
    period: "June 2025 – Sep 2025",
    location: "Mill Creek, Washington",
    description:
      "Connected community internships to support future career exploration through engagement",
    achievements: [
      "Coordinated between local businesses and festival organizers to design Mill Creek Festival",
      "Managed Chamber memberships and timings for an event with 10,000+ attendees",
      "Turned market research into a strategic marketing roadmap for Allstate",
    ],
  },
  {
    type: "honor",
    title: "Future Business Leaders of America",
    company: "National Conference - Top 10 out of 250",
    period: "2024",
    location: "FBLA National Conference",
    description:
      "Delivered high-pressure case study solutions in Finance and Operations, ranking in the top 4% of 250 national competitors",
    achievements: [
      "Dedicated 80+ hours to mastering business fundamentals",
      "Demonstrated growth mindset and analytical problem-solving",
      "Successfully presented global resolutions to large delegate bodies",
    ],
  },
  {
    type: "honor",
    title: "Model United Nations",
    company: "3-time Best Delegate at Conferences",
    period: "2023 - 2024",
    location: "Various Conferences",
    description:
      "Facilitated communication and collaboration as Club President, mentored members in problem-solving and public speaking",
    achievements: [
      "3-time Best Delegate recognition",
      "Essential for team alignment and public speaking development",
      "Led club activities and mentored new members",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl mb-6 text-center">Experience & Education</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            My professional journey, academic background, and achievements
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full -ml-2 z-10 ring-4 ring-slate-50" />

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`${
                            exp.type === "work"
                              ? "bg-blue-500"
                              : exp.type === "education"
                              ? "bg-purple-500"
                              : "bg-green-500"
                          } p-2 rounded-lg`}
                        >
                          {exp.type === "work" ? (
                            <Briefcase className="w-5 h-5 text-white" />
                          ) : exp.type === "education" ? (
                            <GraduationCap className="w-5 h-5 text-white" />
                          ) : (
                            <Award className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl mb-1">{exp.title}</h3>
                          <div className="text-blue-600 mb-1">{exp.company}</div>
                          <div className="text-sm text-slate-500">
                            {exp.period} • {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-slate-600"
                          >
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}