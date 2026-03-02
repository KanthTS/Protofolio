import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { projects } from '../data/portfolioData';
import SectionShell from './SectionShell';

const toneClasses = [
  'from-cyan-300/15 to-cyan-500/5',
  'from-emerald-300/15 to-emerald-500/5',
  'from-amber-200/15 to-orange-400/5',
];
const shortText = (text, max = 105) => (text.length > max ? `${text.slice(0, max).trim()}...` : text);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <SectionShell
        id="projects"
        eyebrow="Projects"
        title="Projects"
        description="Project journey in a vertical path layout."
      >
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-200/50 via-emerald-200/55 to-amber-100/45 md:block" />
          <div className="space-y-5 md:space-y-10">
            {projects.map((project, index) => (
              <div key={project.title} className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-1/2 top-9 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-100/70 bg-cyan-200 shadow-[0_0_12px_rgba(156,238,255,0.8)] md:block" />
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.09, duration: 0.45 }}
                  whileHover={{ y: -8 }}
                  className={`relative flex min-h-[250px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${toneClasses[index % toneClasses.length]} p-5 backdrop-blur-xl ${
                    index % 2 === 0 ? 'md:col-start-1 md:mr-8' : 'md:col-start-2 md:ml-8'
                  }`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/20" />
                  {project.mediaUrl ? (
                    <div className="mb-3 overflow-hidden rounded-xl border border-white/15 bg-black/20">
                      <img
                        src={project.mediaUrl}
                        alt={`${project.title} visual`}
                        className="h-36 w-full object-cover transition duration-500 hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                    {project.tech}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{project.description}</p>
                  <p className="mt-3 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-cyan-100/95">
                    {project.hrPitch}
                  </p>
                  <div className="mt-3 grid gap-2 text-xs text-white/80">
                    <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <span className="font-semibold text-white">Problem:</span>{' '}
                      {shortText(project.problemStatement)}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex w-fit rounded-md border border-cyan-200/40 bg-cyan-200/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100 transition hover:bg-cyan-200/20"
                    >
                      View Details
                    </button>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-7"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                    {activeProject.tech}
                  </p>
                  <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                  aria-label="Close project details"
                >
                  <IoClose size={18} />
                </button>
              </div>

              <div className="space-y-5 text-sm text-white/80">
                {activeProject.mediaUrl ? (
                  <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                    <img
                      src={activeProject.mediaUrl}
                      alt={`${activeProject.title} visual`}
                      className="h-52 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div>
                  <p className="eyebrow mb-2">Problem Statement</p>
                  <p>{activeProject.problemStatement}</p>
                </div>

                <div>
                  <p className="eyebrow mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((techItem) => (
                      <span
                        key={techItem}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-2">Key Features</p>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature) => (
                      <li key={feature} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow mb-2">Outcome</p>
                  <p>{activeProject.impact}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <div className="flex flex-wrap gap-2">
                  {activeProject.githubUrl ? (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-primary"
                    >
                      GitHub Repo
                    </a>
                  ) : null}
                  <button type="button" onClick={() => setActiveProject(null)} className="cta-secondary">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Projects;
