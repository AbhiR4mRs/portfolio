import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, text, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 max-w-3xl ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">{eyebrow}</p>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
          {text}
        </p>
      )}
    </motion.div>
  )
}
