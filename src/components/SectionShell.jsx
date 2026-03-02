import { motion } from 'framer-motion';

const SectionShell = ({ id, eyebrow, title, description, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`glass-panel mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] p-6 sm:p-8 ${className}`}
    >
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h2 className="text-2xl font-bold text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-3 text-sm text-white/70 sm:text-base">{description}</p> : null}
        </div>
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-300 to-emerald-300 sm:w-32" />
      </div>
      {children}
    </motion.section>
  );
};

export default SectionShell;
