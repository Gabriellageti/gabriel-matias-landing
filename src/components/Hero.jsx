import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Network } from "lucide-react";
import { profile } from "../data/profile";

function SignalPanel() {
  return (
    <div className="relative rounded-lg border border-white/10 bg-obs-panel/80 p-4 shadow-gold backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-obs-gold">NOC signal</p>
          <p className="mt-1 text-sm text-obs-muted">Visão operacional limpa</p>
        </div>
        <Network className="size-5 text-obs-mint" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className={`h-12 rounded-md border ${
              index % 7 === 0
                ? "border-obs-gold/50 bg-obs-gold/15"
                : index % 5 === 0
                  ? "border-obs-mint/40 bg-obs-mint/10"
                  : "border-white/10 bg-white/[0.04]"
            }`}
          />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2 w-11/12 rounded-full bg-obs-mint/60" />
        <div className="h-2 w-7/12 rounded-full bg-obs-gold/60" />
        <div className="h-2 w-9/12 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="topo" className="relative min-h-screen overflow-hidden bg-obs-base bg-radial-grid px-5 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(245,245,240,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(245,245,240,.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(4,8,6,.72))]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 inline-flex rounded-md border border-obs-gold/30 bg-obs-gold/10 px-3 py-2 text-sm font-medium text-obs-gold">
            {profile.title}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-obs-soft sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight text-obs-soft sm:text-4xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-obs-muted">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projetos" className="inline-flex items-center justify-center gap-2 rounded-md bg-obs-mint px-5 py-3 font-semibold text-obs-base transition hover:bg-obs-soft">
              Ver projetos
              <ArrowDown className="size-4" />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-obs-soft transition hover:border-obs-gold hover:bg-white/5">
              <Linkedin className="size-4" />
              Conectar no LinkedIn
            </a>
            <a href={profile.links.email} className="inline-flex items-center justify-center gap-2 rounded-md border border-obs-gold/40 px-5 py-3 font-semibold text-obs-soft transition hover:bg-obs-gold/10">
              <Mail className="size-4" />
              Falar comigo
            </a>
          </div>
        </motion.div>
        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SignalPanel />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Da métrica", "Ao diagnóstico", "À ação"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <p className="text-sm font-semibold text-obs-soft">{item}</p>
                <div className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-obs-gold via-obs-mint to-transparent" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
