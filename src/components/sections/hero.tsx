import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WovenCloth from "@/components/ui/woven-cloth";

const EASE = [0.16, 1, 0.3, 1] as const;

const CLOTH_LABELS = {
  monogram: "A T",
  tagline: "· DESDE 2024 ·",
  line1: "ATELIÊ",
  line2: "TRAMA",
  caption: "T E C E L A G E M   A R T E S A N A L",
};

const CLOTH_PALETTE = {
  ground: ["#3a2350", "#2f1c42", "#251534"],
  ink: "#d4af37",
  inkDeep: "#b8932c",
  inkStrong: "#e2c25a",
  rim: "#8a4fc0",
  background: "transparent",
} as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.8, ease: EASE },
        };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[auto_1fr]"
    >
      {/* Brilho roxo de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_30%,#2a1838_0%,#0b0710_65%)] lg:bg-[radial-gradient(70%_90%_at_70%_45%,#2a1838_0%,#0b0710_70%)]"
      />

      <header className="flex items-center justify-between px-5 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-8 lg:col-span-2 lg:px-12 lg:pt-8">
        <a
          href="/"
          className="font-display text-2xl font-semibold tracking-wide text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Ateliê <span className="text-gold">Trama</span>
        </a>
        <a
          href="#contato"
          className="inline-flex min-h-11 items-center rounded-full border border-gold/40 px-4 text-sm font-medium text-gold-soft transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Contato
        </a>
      </header>

      {/* Tecido: área própria no celular, coluna da direita no desktop */}
      <div
        aria-hidden
        className="relative min-h-[180px] flex-1 sm:min-h-[300px] lg:order-last lg:row-start-2 lg:min-h-0"
      >
        <WovenCloth
          labels={CLOTH_LABELS}
          palette={CLOTH_PALETTE}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </div>

      <div className="px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-8 lg:row-start-2 lg:flex lg:flex-col lg:justify-center lg:px-12 lg:pb-16">
        <motion.p
          {...reveal(0.2)}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-gold"
        >
          Tecelagem sob encomenda
        </motion.p>

        <motion.h1
          id="hero-title"
          {...reveal(0.35)}
          className="mt-3 max-w-[14ch] font-display text-[2.5rem] leading-[1.08] font-semibold text-balance text-cream sm:text-6xl lg:text-7xl"
        >
          Tecidos que contam <em className="font-medium text-gold-soft">histórias</em>.
        </motion.h1>

        <motion.p
          {...reveal(0.5)}
          className="mt-4 max-w-[38ch] text-base leading-relaxed text-pretty text-mist sm:text-lg"
        >
          Peças tecidas à mão, com fios naturais e acabamento de ateliê.
        </motion.p>

        <motion.div {...reveal(0.65)} className="mt-7 sm:mt-8">
          <a
            href="#contato"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-base font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] transition-colors duration-200 hover:bg-gold-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-auto"
          >
            Quero saber mais
            <ArrowRight
              aria-hidden
              className="size-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
