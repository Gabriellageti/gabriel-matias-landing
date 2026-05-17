import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Network,
  RadioTower,
  Search,
  Server,
  Terminal,
  Workflow,
  Zap
} from "lucide-react";
import { dashboardItems, projects } from "../data/projects";
import { experience, operatingPrinciples, profile } from "../data/profile";
import { profilePhoto } from "../data/profilePhoto";
import { skillGroups, whatIDo } from "../data/skills";

const navItems = ["Overview", "Signals", "Runbooks", "Projects", "Contact"];

function Panel({ children, className = "" }) {
  return <div className={`obs-panel ${className}`}>{children}</div>;
}

function PanelTitle({ icon: Icon = Activity, label, meta }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
          <Icon className="size-4" />
        </span>
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">{label}</h2>
      </div>
      {meta && <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200">{meta}</span>}
    </div>
  );
}

function Sparkline({ tone = "green", bars = 18 }) {
  const color = tone === "gold" ? "from-amber-500 to-yellow-200" : tone === "red" ? "from-rose-500 to-amber-300" : "from-emerald-500 to-cyan-300";

  return (
    <div className="flex h-20 items-end gap-1">
      {Array.from({ length: bars }).map((_, index) => (
        <span
          key={index}
          className={`w-full rounded-t bg-gradient-to-t ${color} opacity-80`}
          style={{ height: `${22 + ((index * 17 + bars) % 58)}%` }}
        />
      ))}
    </div>
  );
}

function ServiceMap() {
  const nodes = [
    ["NOC", "left-[10%] top-[42%]", "bg-emerald-400"],
    ["ZBX", "left-[34%] top-[18%]", "bg-red-400"],
    ["DASH", "left-[53%] top-[50%]", "bg-cyan-300"],
    ["AI", "left-[72%] top-[25%]", "bg-violet-300"],
    ["RUN", "left-[82%] top-[68%]", "bg-amber-300"]
  ];

  return (
    <div className="relative h-72 overflow-hidden rounded-lg border border-white/10 bg-[#070b10]">
      <div className="absolute inset-0 obs-grid opacity-40" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="obs-flow" d="M15 50 C 32 18, 42 20, 38 24 S 55 54, 58 58 S 72 28, 76 32 S 86 68, 86 72" />
        <path className="obs-flow obs-flow-delay" d="M15 50 C 30 64, 44 72, 58 58 S 72 76, 86 72" />
      </svg>
      {nodes.map(([label, position, color]) => (
        <div key={label} className={`absolute ${position} -translate-x-1/2 -translate-y-1/2`}>
          <div className={`obs-node ${color}`} />
          <span className="mt-2 block rounded border border-white/10 bg-black/50 px-2 py-1 text-center text-[11px] font-semibold text-slate-200 backdrop-blur">{label}</span>
        </div>
      ))}
    </div>
  );
}

function DashboardMock({ title, variant }) {
  const tone = variant === "alerts" ? "red" : variant === "availability" ? "green" : "gold";

  return (
    <Panel className="p-4">
      <PanelTitle icon={BarChart3} label={title} meta="mock seguro" />
      <Sparkline tone={tone} />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["OK", "WARN", "INFO"].map((item, index) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{item}</p>
            <p className="mt-1 font-display text-lg font-semibold text-slate-100">{[98, 7, 24][index]}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default function ObservabilityLanding() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div className="fixed inset-0 obs-bg" />
      <div className="fixed inset-0 obs-scan opacity-25" />

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-20 border-r border-white/10 bg-[#070b10]/90 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col items-center gap-5 py-5">
          <div className="grid size-11 place-items-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
            <RadioTower className="size-5" />
          </div>
          <div className="h-px w-10 bg-white/10" />
          {[Activity, BarChart3, Terminal, Network, Search].map((Icon, index) => (
            <a key={index} href={`#${navItems[index].toLowerCase()}`} className="grid size-11 place-items-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-cyan-300">
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070b]/82 backdrop-blur-xl lg:ml-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <img src={profilePhoto} alt="Gabriel Lage" className="size-11 rounded-lg border border-cyan-300/25 object-cover" />
            <div>
              <p className="font-display text-sm font-semibold text-slate-100">{profile.name}</p>
              <p className="text-xs text-slate-500">Observability Command Center</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-300">
                {item}
              </a>
            ))}
          </nav>
          <a href={profile.links.email} className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20">
            Contato
          </a>
        </div>
      </header>

      <main className="relative z-10 lg:ml-20">
        <section id="overview" className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:grid-cols-[1.05fr_.95fr]">
          <Panel className="relative min-h-[620px] overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 obs-grid opacity-30" />
            <div className="relative">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">status: evolving</span>
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">NOC / Observabilidade</span>
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Gabriel Lage transforma sinais em clareza operacional.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300">
                  Ver iniciativas <Zap className="size-4" />
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:bg-cyan-300/10">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="relative mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["Menos ruído", "31%", "green"],
                ["Mais contexto", "4.8m", "gold"],
                ["Do alerta à ação", "128", "green"]
              ].map(([label, value, tone]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className={`mt-4 font-display text-3xl font-semibold ${tone === "gold" ? "text-amber-200" : "text-emerald-300"}`}>{value}</p>
                  <Sparkline tone={tone} bars={12} />
                </div>
              ))}
            </div>
          </Panel>

          <div className="grid gap-4">
            <Panel className="p-5">
              <PanelTitle icon={Server} label="Live topology" meta="synthetic" />
              <ServiceMap />
            </Panel>
            <Panel className="grid gap-4 p-5 sm:grid-cols-[.8fr_1fr]">
              <img src={profilePhoto} alt="Foto de Gabriel Lage" className="h-full min-h-64 rounded-lg border border-white/10 object-cover" />
              <div>
                <PanelTitle icon={Search} label="Profile trace" meta="public" />
                <p className="text-xl font-semibold text-white">{profile.title}</p>
                <p className="mt-4 leading-7 text-slate-300">{profile.about}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Zabbix", "Grafana", "Datadog mindset", "ELK", "NOC", "Runbooks"].map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
            </Panel>
          </div>
        </section>

        <section id="signals" className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:grid-cols-4">
          {whatIDo.map((item, index) => {
            const Icon = [RadioTower, BarChart3, AlertTriangle, Workflow, Bot, Terminal][index];
            return (
              <Panel key={item.title} className={index < 2 ? "p-5 lg:col-span-2" : "p-5"}>
                <PanelTitle icon={Icon} label={item.title} meta={index % 2 === 0 ? "signal" : "insight"} />
                <p className="leading-7 text-slate-300">{item.description}</p>
              </Panel>
            );
          })}
        </section>

        <section id="runbooks" className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr]">
          <Panel className="p-5">
            <PanelTitle icon={CheckCircle2} label="Como eu penso operação" meta="principles" />
            <div className="space-y-3">
              {operatingPrinciples.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </Panel>
          <Panel className="p-5">
            <PanelTitle icon={Activity} label="Experiência em produção" meta="qualitativo" />
            <div className="grid gap-3 md:grid-cols-2">
              {experience.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-black/25 p-4">
                  <span className="mt-1 size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,.9)]" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <Panel className="p-5">
            <PanelTitle icon={Network} label="Projetos e iniciativas" meta="portfolio" />
            <div className="grid gap-4 lg:grid-cols-5">
              {projects.map((project, index) => (
                <div key={project.title} className={`rounded-lg border border-white/10 bg-white/[0.035] p-5 ${index === 0 ? "lg:col-span-2" : ""}`}>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-200">{project.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 md:grid-cols-2">
          {dashboardItems.map((item) => <DashboardMock key={item.title} title={item.title} variant={item.variant} />)}
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Panel key={group.title} className="p-5">
              <PanelTitle icon={BarChart3} label={group.title} />
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">{item}</span>
                ))}
              </div>
            </Panel>
          ))}
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-6 pb-14 sm:px-6">
          <Panel className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 obs-grid opacity-20" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Final CTA</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Quer conversar sobre observabilidade, dashboards, automação ou inteligência operacional?
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                  Técnica com contexto. Operação com clareza. Dados que ajudam pessoas a decidir melhor.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-semibold text-black transition hover:bg-emerald-300">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a href={profile.links.email} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white hover:border-cyan-300">
                  <Mail className="size-4" /> E-mail
                </a>
                <a href={profile.links.github} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 font-semibold text-slate-400">
                  <Github className="size-4" /> GitHub em breve
                </a>
              </div>
            </div>
          </Panel>
          <footer className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Gabriel Lage · LageOps</p>
            <p>Monitoração, Observabilidade, Automação e Inteligência Operacional · 2026</p>
          </footer>
        </section>
      </main>
    </div>
  );
}
