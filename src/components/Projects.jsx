import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { Card, Section } from "./Section";

export default function Projects() {
  return (
    <Section id="projetos" eyebrow="Projetos e iniciativas" title="Construindo presença com substância técnica.">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={project.title} className={index === 0 ? "lg:col-span-2" : ""}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-obs-gold">{project.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-obs-soft">{project.title}</h3>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-obs-mint" />
            </div>
            <p className="mt-4 max-w-3xl leading-8 text-obs-muted">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.focus.map((item) => (
                <span key={item} className="rounded-md bg-obs-green px-3 py-2 text-sm text-obs-soft">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
