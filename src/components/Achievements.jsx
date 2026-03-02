import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import SectionShell from './SectionShell';

const Achievements = () => {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Certifications"
      title="Verified Learning & Programs"
      description="Credentials and programs completed as listed in your resume."
    >
      <div className="relative pl-5">
        <div className="absolute left-1 top-2 h-[95%] w-px bg-gradient-to-b from-cyan-200/60 to-emerald-200/60" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="space-y-3"
        >
          {certifications.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, x: 18 },
                show: { opacity: 1, x: 0, transition: { duration: 0.38 } },
              }}
              className="relative rounded-2xl border border-white/15 bg-white/5 p-3.5"
            >
              <span className="absolute -left-[1.42rem] top-5 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(156,238,255,0.9)]" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-white/82">{item.title}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md border border-cyan-200/35 bg-cyan-200/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100 transition hover:bg-cyan-200/20"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
};

export default Achievements;
