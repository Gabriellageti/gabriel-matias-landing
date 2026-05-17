import { Music, ScrollText, Sparkles } from "lucide-react";
import { Card, Section } from "./Section";

export default function HumanSide() {
  return (
    <Section id="alem" eyebrow="Além da operação" title="Técnica, propósito e criatividade.">
      <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
        <p className="text-xl leading-9 text-obs-soft">
          Fora dos dashboards e alertas, também caminho pela teologia, música e criação de projetos com propósito. Essa mistura molda minha forma de pensar tecnologia: técnica, mas também humana.
        </p>
        <div className="grid gap-4">
          {[
            ["Cristão e teólogo em formação", "Reflexão, estudo e responsabilidade no modo de construir."],
            ["Músico", "Baixo, violão, teclado e voz como parte da rotina criativa."],
            ["Criador do Teolodia", "Projeto paralelo que une conteúdo, tecnologia e propósito."]
          ].map(([title, text], index) => {
            const Icon = [ScrollText, Music, Sparkles][index];
            return (
              <Card key={title} className="flex gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-obs-gold" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-obs-soft">{title}</h3>
                  <p className="mt-2 leading-7 text-obs-muted">{text}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
