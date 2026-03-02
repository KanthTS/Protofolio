import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import SectionShell from './SectionShell';

const Skills = () => {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Tools I Build With"
      description="A full-stack toolkit across programming, backend architecture, databases, and developer productivity."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            whileHover={{ y: -6, rotate: -1.5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-4 text-center"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
            <p className="text-sm font-medium text-white transition group-hover:text-cyan-100">{skill}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

export default Skills;
