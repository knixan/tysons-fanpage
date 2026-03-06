
import { Heart } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import DonateSection from "./components/DonateSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <DonateSection />

      <footer className="border-t border-border py-10 text-center">
        <p className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground">
          Gjord med <Heart className="h-4 w-4 fill-primary text-primary" /> för
          Tyson
        </p>
      </footer>
    </div>
  );
}