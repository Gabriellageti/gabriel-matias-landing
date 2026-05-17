import { Activity, Mail } from "lucide-react";
import { profile } from "../data/profile";

const navItems = [
  ["Sobre", "#sobre"],
  ["Atuação", "#atuacao"],
  ["Projetos", "#projetos"],
  ["Contato", "#contato"]
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obs-base/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#topo" className="flex items-center gap-3 text-obs-soft">
          <span className="grid size-9 place-items-center rounded-md border border-obs-gold/30 bg-obs-gold/10">
            <Activity className="size-4 text-obs-gold" />
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">Gabriel Matias</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-obs-muted md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-obs-soft">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={profile.links.email}
          className="inline-flex items-center gap-2 rounded-md border border-obs-gold/35 px-3 py-2 text-sm font-medium text-obs-soft transition hover:border-obs-gold hover:bg-obs-gold/10"
        >
          <Mail className="size-4" />
          <span className="hidden sm:inline">Contato</span>
        </a>
      </div>
    </header>
  );
}
