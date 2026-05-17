import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function ContactCTA() {
  return (
    <section id="contato" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-obs-gold/25 bg-obs-green/65 p-8 shadow-gold sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-obs-gold">Contato</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-obs-soft sm:text-4xl">
              Quer conversar sobre observabilidade, dashboards, automação ou inteligência operacional?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-obs-muted">
              Gabriel Matias conecta operação, dados e clareza para transformar sinais técnicos em decisões mais úteis.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-obs-mint px-5 py-3 font-semibold text-obs-base transition hover:bg-obs-soft">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a href={profile.links.email} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-obs-soft transition hover:border-obs-gold hover:bg-white/5">
              <Mail className="size-4" />
              E-mail
            </a>
            <a href={profile.links.github} aria-disabled="true" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 font-semibold text-obs-muted opacity-70">
              <Github className="size-4" />
              GitHub em breve
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
