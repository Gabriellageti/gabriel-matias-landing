import { BrainCircuit, Building2, Sparkles } from "lucide-react";
import { experience, operatingPrinciples, profile } from "../data/profile";
import { Card, Section } from "./Section";

export default function About() {
  return (
    <>
      <Section id="sobre" eyebrow="Sobre" title="Tecnologia, operação e negócio no mesmo painel.">
        <div className="grid gap-8 lg:grid-cols-[1fr_.85fr]">
          <div>
            <p className="text-xl leading-9 text-obs-soft">{profile.about}</p>
            <p className="mt-6 text-lg leading-8 text-obs-muted">
              Minha atuação está no encontro entre operação, dados, automação e inteligência. Trabalho para transformar alertas técnicos em informação clara, acionável e útil para quem precisa decidir.
            </p>
            <p className="mt-6 text-lg leading-8 text-obs-muted">
              Tenho interesse especial em IA aplicada à operação, melhoria contínua e formas mais inteligentes de conectar tecnologia, contexto e ação.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Monitoração/NOC", "Atuação prática em rotinas de operação, análise e suporte a decisões."],
              ["Observabilidade", "Leitura de sinais, métricas e eventos com foco em clareza operacional."],
              ["Melhoria contínua", "Perfil inquieto, criativo e orientado a simplificar o que importa."]
            ].map(([title, text], index) => {
              const Icon = [Building2, BrainCircuit, Sparkles][index];
              return (
                <Card key={title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-obs-mint/10 text-obs-mint">
                    <Icon className="size-5" />
                  </span>
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

      <Section id="atuacao" eyebrow="Experiência e atuação" title="Rotina prática em ambientes de monitoração.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((item) => (
            <Card key={item}>
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-obs-gold to-obs-mint" />
              <p className="leading-7 text-obs-soft">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="pensamento" eyebrow="Como eu penso operação" title={profile.differential}>
        <div className="grid gap-4 md:grid-cols-2">
          {operatingPrinciples.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-xl font-semibold text-obs-soft">{item.title}</h3>
              <p className="mt-3 leading-7 text-obs-muted">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
