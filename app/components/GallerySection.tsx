// components/GallerySection.tsx
import Image from "next/image";

const autumnImage = "/tyson-lab.jpg";
const playImage = "/tyson-retard.jpg";
const sleepImage = "/tyson-hiphopper.jpg";
const swimImage = "/tyson-lipar.jpg";

const images = [
  { src: playImage, alt: "Tyson leker i parken", caption: "Retard" },
  { src: sleepImage, alt: "Tyson sover mysigt", caption: "Hiphopper" },
  { src: swimImage, alt: "Tyson simmar", caption: "Blääh" },
  { src: autumnImage, alt: "Tyson i höstlöv", caption: "Bjuder på Labvin" },
];

const GallerySection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Galleri
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Tysons <span className="text-gradient-gold">äventyr</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.caption}
              className="group relative overflow-hidden rounded-[var(--radius)]"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-display text-lg font-bold text-primary">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;