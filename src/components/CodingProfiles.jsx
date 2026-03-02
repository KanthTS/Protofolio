import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode } from 'react-icons/fa6';
import { SiLeetcode, SiCodechef, SiCodepen } from 'react-icons/si';
import { TbBrandGoogle } from 'react-icons/tb';
import { codingProfiles } from '../data/portfolioData';
import SectionShell from './SectionShell';

const iconMap = {
  leetcode: SiLeetcode,
  codechef: SiCodechef,
  gfg: TbBrandGoogle,
  codepen: SiCodepen,
  default: FaLaptopCode,
};

const CodingProfiles = () => {
  return (
    <SectionShell
      id="coding"
      eyebrow="Coding Profiles"
      title="Competitive & Practice Platforms"
      description="Recruiters can quickly verify coding activity and problem-solving profiles here."
    >
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-200/50 via-emerald-200/55 to-amber-100/45 md:block" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-4 md:space-y-8"
        >
          {codingProfiles.map((profile, index) => {
            const Icon = iconMap[profile.icon] || iconMap.default;
            return (
              <div key={profile.label} className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-100/70 bg-cyan-200 shadow-[0_0_12px_rgba(156,238,255,0.8)] md:block" />
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
                  }}
                  whileHover={{ y: -5 }}
                  className={`group rounded-xl border border-white/15 bg-white/5 p-3.5 transition hover:border-cyan-200/40 ${
                    index % 2 === 0 ? 'md:col-start-1 md:mr-8' : 'md:col-start-2 md:ml-8'
                  }`}
                >
                  <div className="mb-2.5 flex items-center justify-between">
                    <Icon className="text-lg text-cyan-100" />
                    <FaCode className="text-xs text-white/45" />
                  </div>
                  <p className="text-sm font-semibold text-white">{profile.label}</p>
                  <p className="mt-0.5 truncate text-xs text-white/65">{profile.handle}</p>
                </motion.a>
              </div>
            );
          })}
        </motion.div>
      </div>
    </SectionShell>
  );
};

export default CodingProfiles;
