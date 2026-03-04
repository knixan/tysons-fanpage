// components/HeroSection.tsx
import { Heart } from "lucide-react";
import Image from "next/image";
const heroImage = "/tyson-pinne.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="Tyson - Svart Labrador i gyllene solljus"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 text-center">
        <div className="animate-fade-in-up">
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Fanpage
          </p>
          <h1 className="font-display text-7xl font-900 leading-tight md:text-9xl">
            <span className="text-gradient-gold">Tyson</span>
          </h1>
          <p className="mt-4 flex items-center justify-center gap-2 font-body text-lg text-muted-foreground">
            Svart Labrador{" "}
            <Heart className="h-4 w-4 fill-primary text-primary" /> Bästa
            kompisen
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;