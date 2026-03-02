import { motion } from 'framer-motion';
import { MdOutgoingMail } from 'react-icons/md';
import { profile } from '../data/portfolioData';
import SectionShell from './SectionShell';

const Contact = () => {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s Build Something Strong"
      description="Open to internships, full-stack roles, and collaboration on impactful web products."
    >
      <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-300/10 via-white/5 to-emerald-300/10 p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-white/80 sm:text-base">
            If you&apos;re hiring for a role where ownership, clean code, and product-focused execution matter,
            I&apos;d be happy to connect.
          </p>
          <motion.a
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
          >
            <MdOutgoingMail className="text-lg" />
            {profile.email}
          </motion.a>
        </div>
      </div>
    </SectionShell>
  );
};

export default Contact;
