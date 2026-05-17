import { skillGroups } from "../data/skills";
import { Card, Section } from "./Section";

export default function Skills() {
  return (
    <Section id="stack" eyebrow="Stack e ferramentas" title="Ferramentas tratadas pelo uso, evolução e estratégia.">
      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="font-display text-xl font-semibold text-obs-soft">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-obs-muted">
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
