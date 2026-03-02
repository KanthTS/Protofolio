import { motion } from 'framer-motion';

const steps = [
  { label: 'Skills', href: '#skills' },
  { label: 'Coding Profiles', href: '#coding' },
  { label: 'Projects', href: '#projects' },
];

const PathFlow = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className="glass-panel mx-auto w-full max-w-6xl rounded-3xl px-5 py-5 sm:px-8"
    >
      <p className="eyebrow mb-4 text-center">Journey Path</p>

      <div className="relative">
        <div className="absolute left-4 right-4 top-4 hidden h-px bg-white/15 sm:block" />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 'calc(100% - 2rem)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute left-4 top-4 hidden h-px bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-100 sm:block"
        />

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-0">
          {steps.map((step, idx) => (
            <motion.a
              key={step.label}
              href={step.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.35 }}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 sm:justify-center sm:border-transparent sm:bg-transparent"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-100/40 bg-cyan-200/15 text-xs font-semibold text-cyan-100">
                {idx + 1}
              </span>
              <span className="text-sm font-medium text-white/85 transition group-hover:text-white">
                {step.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PathFlow;
