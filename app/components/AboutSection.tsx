// components/AboutSection.tsx
import { Dog, Heart, Star, Cake } from "lucide-react";
import Image from "next/image";
const portraitImage = "/tyson12år.png";

const facts = [
  { icon: Dog, label: "Ras", value: "Svart Labrador" },
  { icon: Cake, label: "Ålder", value: "12 år (84 hundår)" },
  { icon: Heart, label: "Personlighet", value: "Lojal & Gosig" },
  { icon: Star, label: "Favoritaktivitet", value: "Bada, äta & sova" },
];

const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
       <div className="overflow-hidden rounded-[var(--radius)]">
  <div className="relative aspect-[3/4] w-full">
    <Image
      src={portraitImage}
      alt="Tyson porträtt"
      fill
      className="object-cover transition-transform duration-700 hover:scale-105"
      sizes="(min-width: 768px) 50vw, 100vw"
    />
  </div>
</div>

          <div>
            <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Om Tyson
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Världens bästa
              <br />
              <span className="text-gradient-gold">svarta labrador</span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              Tyson är en gosig och kärleksfull svart labrador som älskar att
              utforska världen. Oavsett om det handlar om att springa i parken,
              simma i sjön eller mysa i soffan – Tyson gör allt med hela sitt
              hjärta.
            </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[var(--radius)] border border-border bg-card p-4"
                >
                  <fact.icon className="mb-2 h-5 w-5 text-primary" />
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;