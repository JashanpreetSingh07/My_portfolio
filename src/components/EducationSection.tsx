import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech — Computer Science & Engineering",
    detail: "CGPA: 8.55",
    period: "Aug 2023 – Present",
  },
  {
    institution: "Army Public School",
    location: "Jalandhar, Punjab",
    degree: "Intermediate (12th)",
    detail: "Percentage: 90.4%",
    period: "Apr 2021 – Mar 2022",
  },
  {
    institution: "Army Public School",
    location: "Bikaner, Rajasthan",
    degree: "Matriculation (10th)",
    detail: "Percentage: 91.2%",
    period: "Apr 2019 – Mar 2020",
  },
];

const certificates = [
  {
    title: "AI Powered NLP",
    org: "AlgoTutor Academy",
    period: "Jul – Aug 2025",
    link: "https://drive.google.com/file/d/1IAoxKhtgVccvvOId1QU-yI2qZCZtl2wO/view?usp=sharing"
  },
  { 
    title: "Introduction to Internet of Things", 
    org: "NPTEL", 
    period: "Jan – Apr 2025",
    link: "https://drive.google.com/file/d/17BtQgiLTBh5YhnQCHnno7kovAn1HzQnM/view?usp=sharing"
  },
  { 
    title: "Programming in C, C++, Java and DSA", 
    org: "NeoColab", 
    period: "Jan 2024 – Aug 2025",
    link: "https://drive.google.com/drive/folders/1jHL2AKBimudH6UqY4spzuFuCoKCi8Qhr?usp=sharing"
  },
  { 
    title: "Responsive Web Design", 
    org: "FreeCodeCamp", 
    period: "Aug – Oct 2023",
    link: "https://drive.google.com/file/d/1pUOlQ0-o2_Fa7ozepgPtURVChNkSzPxW/view?usp=sharing"
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Education & Certs</h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.institution + edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className={`relative flex items-start gap-6 mb-12 md:gap-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 glow-primary z-10" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-2 mb-2 justify-start">
                    <GraduationCap size={18} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  <p className="text-sm text-secondary-foreground mt-2">{edu.degree}</p>
                  <p className="text-sm font-semibold text-primary mt-1">{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Certificates & Training</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert, i) => (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="block glass rounded-2xl p-5 text-center hover:border-primary/30 transition-all cursor-pointer"
              >
                <Award size={24} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.org}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
