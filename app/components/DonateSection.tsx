import { Heart, Bone, Smartphone } from "lucide-react";
import Image from "next/image";

const swishQr = "/swish-QR-small.png";
const swishNumber = "0735358075";

const donationAmounts = ["20 kr", "50 kr", "100 kr", "200 kr"];

const DonateSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Donera
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Donera ett <span className="text-gradient-gold">hundben till Tyson</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
              Vill du skämma bort Tyson med ett extra hundben? Swisha en valfri
              summa genom att scanna QR-koden eller använda numret nedan.
            </p>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    Swisha en gåva
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Varje bidrag blir till fler ben, godis och mys.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {donationAmounts.map((amount) => (
                  <div
                    key={amount}
                    className="rounded-[var(--radius)] border border-border bg-background p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Bone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-display text-lg font-bold">{amount}</p>
                        <p className="font-body text-sm text-muted-foreground">
                          Ett fint hundbensbidrag
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[var(--radius)] border border-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      Swish-nummer
                    </p>
                    <p className="font-display text-2xl font-bold">{swishNumber}</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 font-body text-sm text-muted-foreground">
                Scanna QR-koden eller öppna Swish och skicka valfritt belopp till
                numret ovan.
              </p>
            </div>

            <div className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-sm">
              <div className="mx-auto max-w-md">
                <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius)] bg-white">
                  <Image
                    src={swishQr}
                    alt="Swish QR-kod för donation till Tyson"
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Scanna med Swish
                  </p>
                  <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">
                    Rikta mobilkameran eller Swish-appen mot QR-koden för att
                    donera ett hundben till Tyson.
                  </p>
                  <p className="mt-4 font-display text-xl font-bold">
                    0735358075
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;