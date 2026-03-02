import { motion } from 'framer-motion';
import { aboutText, profile } from '../data/portfolioData';
import SectionShell from './SectionShell';

const cards = [
  profile.githubBio,
  `Based in ${profile.location}`,
  profile.education,
];

const About = () => {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Engineering With Product Sense"
      description="I focus on turning ideas into usable products that feel polished and reliable."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <p className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white/75">{aboutText}</p>

        <div className="grid gap-3">
          {cards.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ x: 4 }}
              className="rounded-2xl border border-white/15 bg-gradient-to-r from-white/10 to-white/5 p-4 text-sm text-white/85"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

export default About;
