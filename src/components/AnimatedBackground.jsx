import { useMemo } from 'react';
import { motion } from 'framer-motion';

const themes = [
  {
    base: '#060b18',
    overlay:
      'radial-gradient(circle at 15% 20%, rgba(99, 255, 224, 0.28), transparent 36%), radial-gradient(circle at 82% 0%, rgba(80, 148, 255, 0.32), transparent 34%), radial-gradient(circle at 66% 88%, rgba(255, 196, 120, 0.2), transparent 34%)',
    glowA: 'bg-cyan-300/20',
    glowB: 'bg-emerald-300/20',
    glowC: 'bg-amber-200/20',
    ring: 'border-cyan-100/20',
    particle: 'bg-cyan-50/70',
    streak: 'via-cyan-100/90',
  },
  {
    base: '#0b0818',
    overlay:
      'radial-gradient(circle at 14% 20%, rgba(255, 133, 200, 0.28), transparent 35%), radial-gradient(circle at 88% 8%, rgba(155, 130, 255, 0.3), transparent 35%), radial-gradient(circle at 58% 92%, rgba(123, 240, 255, 0.18), transparent 35%)',
    glowA: 'bg-fuchsia-300/20',
    glowB: 'bg-violet-300/20',
    glowC: 'bg-sky-200/20',
    ring: 'border-fuchsia-100/20',
    particle: 'bg-fuchsia-50/70',
    streak: 'via-fuchsia-100/90',
  },
  {
    base: '#08140f',
    overlay:
      'radial-gradient(circle at 20% 18%, rgba(136, 255, 132, 0.25), transparent 35%), radial-gradient(circle at 84% 12%, rgba(91, 255, 224, 0.24), transparent 32%), radial-gradient(circle at 60% 92%, rgba(255, 245, 146, 0.16), transparent 32%)',
    glowA: 'bg-lime-300/20',
    glowB: 'bg-emerald-300/20',
    glowC: 'bg-yellow-200/20',
    ring: 'border-lime-100/20',
    particle: 'bg-lime-50/70',
    streak: 'via-lime-100/90',
  },
];

const AnimatedBackground = () => {
  const scene = useMemo(() => {
    const theme = themes[Math.floor(Math.random() * themes.length)];

    const particles = Array.from({ length: 58 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
    }));

    const streaks = Array.from({ length: 11 }, (_, i) => ({
      id: i,
      top: Math.random() * 90,
      left: Math.random() * 100,
      delay: Math.random() * 9,
      duration: Math.random() * 2 + 2.8,
      rotate: Math.random() > 0.5 ? '-24deg' : '24deg',
    }));

    return { theme, particles, streaks };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: scene.theme.base }} />
      <div className="absolute inset-0" style={{ backgroundImage: scene.theme.overlay }} />

      <motion.div
        className={`absolute -left-20 top-[6%] h-[360px] w-[360px] rounded-full blur-[95px] ${scene.theme.glowA}`}
        animate={{ y: [0, -24, 0], x: [0, 18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute -right-24 top-[30%] h-[400px] w-[400px] rounded-full blur-[100px] ${scene.theme.glowB}`}
        animate={{ y: [0, 26, 0], x: [0, -24, 0] }}
        transition={{ duration: 12.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute left-[40%] top-[72%] h-[260px] w-[260px] rounded-full blur-[90px] ${scene.theme.glowC}`}
        animate={{ scale: [1, 1.22, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {scene.particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full ${scene.theme.particle}`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -28, 0], opacity: [0.2, 0.85, 0.2], scale: [1, 1.35, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {scene.streaks.map((s) => (
        <motion.span
          key={s.id}
          className={`absolute h-px w-24 bg-gradient-to-r from-transparent ${scene.theme.streak} to-transparent`}
          style={{ top: `${s.top}%`, left: `${s.left}%`, rotate: s.rotate }}
          animate={{ x: [0, 110], opacity: [0, 0.9, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      <motion.div
        className={`absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border ${scene.theme.ring}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 88, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[44vmax] w-[44vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 62, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-0 opacity-20 [background:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.62)_100%)]" />
    </div>
  );
};

export default AnimatedBackground;
