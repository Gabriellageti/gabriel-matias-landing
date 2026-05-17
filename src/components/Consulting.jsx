import { BarChart3, FileChartColumn, Settings2, Wrench } from "lucide-react";
import { Card, Section } from "./Section";

const services = [
  "Dashboards",
  "Análise operacional",
  "Automações",
  "Estruturação de dados",
  "Melhoria de processos",
  "Materiais executivos",
  "Apoio tecnológico para negócios locais",
  "Visão digital e operacional"
];

const icons = [BarChart3, Settings2, FileChartColumn, Wrench];

export default function Consulting() {
  return (
    <Section id="consultoria" eyebrow="Consultoria" title="Consultoria e braço tecnológico.">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-xl leading-9 text-obs-soft">
            Atuo também em projetos de consultoria como braço tecnológico, ajudando negócios a organizarem informações, criarem dashboards, melhorarem processos e transformarem dados soltos em visão prática para decisão.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={service} className="flex items-center gap-3 p-4">
                <Icon className="size-5 text-obs-gold" />
                <span className="text-obs-soft">{service}</span>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
