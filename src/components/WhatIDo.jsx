import { Bot, FileText, Gauge, LayoutDashboard, RadioTower, Workflow } from "lucide-react";
import { whatIDo } from "../data/skills";
import { Card, Section } from "./Section";

const icons = [RadioTower, LayoutDashboard, Gauge, Workflow, Bot, FileText];

export default function WhatIDo() {
  return (
    <Section id="o-que-faco" eyebrow="O que eu faço" title="Da métrica ao diagnóstico. Do alerta à ação.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whatIDo.map((item, index) => {
          const Icon = icons[index];
          return (
            <Card key={item.title} className="min-h-56">
              <span className="mb-6 grid size-12 place-items-center rounded-md border border-obs-gold/25 bg-obs-gold/10 text-obs-gold">
                <Icon className="size-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-obs-soft">{item.title}</h3>
              <p className="mt-3 leading-7 text-obs-muted">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
