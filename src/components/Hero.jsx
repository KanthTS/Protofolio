import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaArrowRightLong } from 'react-icons/fa6';
import { profile, projects } from '../data/portfolioData';

const socials = [
  { href: profile.github, label: 'GitHub', icon: FaGithub },
  { href: profile.linkedIn, label: 'LinkedIn', icon: FaLinkedinIn },
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="mx-auto grid w-full max-w-6xl gap-5 pb-10 pt-14 lg:grid-cols-[1.25fr_0.75fr]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-10"
      >
        <div className="absolute -right-10 top-6 h-28 w-28 rounded-full border border-white/20" />
        <div className="absolute -right-2 top-14 h-28 w-28 rounded-full border border-emerald-200/30" />

        <p className="eyebrow mb-3">{profile.tagline}</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          {profile.firstName}
          <span className="ml-2 block bg-gradient-to-r from-emerald-200 via-cyan-200 to-amber-100 bg-clip-text text-transparent">
            {profile.lastName}
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">{profile.role}</p>
        <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
          {profile.education} | {profile.location}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="cta-primary">
            Explore Work
            <FaArrowRightLong />
          </a>
          <a href={encodeURI(profile.resumeUrl)} target="_blank" rel="noreferrer" className="cta-secondary">
            Resume
          </a>
          <a href={`mailto:${profile.email}`} className="cta-secondary">
            Let&apos;s Collaborate
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white/90 transition hover:border-cyan-200/40 hover:text-cyan-100"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08 }}
        className="grid gap-5"
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-panel overflow-hidden rounded-[2rem] p-3"
        >
          {!imageError ? (
            <img
              src={profile.profileImage}
              alt={`${profile.fullName} portrait`}
              className="h-64 w-full rounded-[1.4rem] object-cover object-center sm:h-72"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-64 w-full flex-col items-center justify-center rounded-[1.4rem] border border-dashed border-white/30 bg-white/5 text-center sm:h-72">
              <p className="text-sm font-semibold text-white">Image not found</p>
              <p className="mt-1 text-xs text-white/70">Check file path: `{profile.profileImage}`</p>
            </div>
          )}
        </motion.div>

        <div className="glass-panel rounded-[2rem] p-5">
          <p className="eyebrow">Active Stack</p>
          <p className="mt-3 text-2xl font-bold text-white">MERN + Spring Boot</p>
          <p className="mt-2 text-sm text-white/70">Balancing product thinking with scalable API architecture.</p>
        </div>

        <div className="glass-panel rounded-[2rem] p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="eyebrow">Portfolio Metrics</p>
            <span className="rounded-full border border-white/20 px-2 py-1 text-xs text-white/70">2026</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-3">
              <p className="text-xs text-white/60">Projects</p>
              <p className="mt-1 text-3xl font-bold text-white">{String(projects.length).padStart(2, '0')}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-3">
              <p className="text-xs text-white/60">Core Role</p>
              <p className="mt-1 text-lg font-semibold text-white">MERN + Java Full Stack</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
