import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#coding', label: 'Coding' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="sticky top-4 z-50 mx-auto mt-4 flex w-[94%] max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-[#0c1f28]/60 px-4 py-3 backdrop-blur-2xl sm:px-6"
    >
      <a href="#home" className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_#66ffd9]" />
        <span className="text-sm font-semibold tracking-[0.2em] text-white">KANTH</span>
      </a>

      <ul className="hidden items-center gap-5 md:flex">
        {links.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-sm text-white/75 transition hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${profile.email}`}
        className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20 sm:text-sm"
      >
     Let's Connect
      </a>
    </motion.nav>
  );
};

export default Navbar;
