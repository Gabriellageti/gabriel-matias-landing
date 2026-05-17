import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-obs-gold">{eyebrow}</p>}
            {title && <h2 className="font-display text-3xl font-semibold text-obs-soft sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glow backdrop-blur transition duration-300 hover:border-obs-gold/40 hover:bg-white/[0.065] ${className}`}
    >
      {children}
    </div>
  );
}
