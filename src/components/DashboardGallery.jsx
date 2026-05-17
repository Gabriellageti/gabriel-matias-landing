import { dashboardItems } from "../data/projects";
import { Card, Section } from "./Section";

function DashboardPlaceholder({ variant }) {
  const bars = {
    availability: [78, 92, 65, 88, 72],
    application: [58, 74, 83, 69, 91],
    alerts: [32, 49, 66, 81, 54],
    service: [70, 40, 84, 57, 93]
  }[variant];

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-[#07110d] p-4">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(42,245,152,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(213,168,79,.18)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative grid h-full grid-cols-[.8fr_1.2fr] gap-3">
        <div className="space-y-3">
          <div className="h-8 rounded bg-obs-gold/20" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 rounded bg-obs-mint/15" />
            <div className="h-16 rounded bg-white/10" />
          </div>
          <div className="space-y-2">
            {bars.slice(0, 4).map((bar, index) => (
              <div key={index} className="h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-obs-gold to-obs-mint" style={{ width: `${bar}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className={`rounded border ${index % 4 === 0 ? "border-obs-gold/40 bg-obs-gold/10" : "border-obs-mint/20 bg-obs-mint/10"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardGallery() {
  return (
    <Section id="dashboards" eyebrow="Galeria" title="Dashboards e visões operacionais.">
      <div className="mb-6 rounded-lg border border-obs-gold/25 bg-obs-gold/10 p-4 text-sm leading-7 text-obs-soft">
        Espaço preparado para imagens reais ou mockups. Antes de publicar prints, anonimize hosts, IPs, URLs internas, clientes, incidentes e qualquer dado sensível.
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {dashboardItems.map((item) => (
          <Card key={item.title} className="p-4">
            <DashboardPlaceholder variant={item.variant} />
            <div className="p-2 pt-5">
              <h3 className="font-display text-xl font-semibold text-obs-soft">{item.title}</h3>
              <p className="mt-2 leading-7 text-obs-muted">{item.caption}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
