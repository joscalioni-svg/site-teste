import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Ruler, Scissors, Truck, type LucideIcon } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const BENEFITS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Leaf,
    title: "Fios naturais",
    text: "Algodão, linho e lã de origem rastreada, tingidos com cuidado.",
  },
  {
    icon: Ruler,
    title: "Feito sob medida",
    text: "Cada peça nasce das medidas e da história de quem encomenda.",
  },
  {
    icon: Scissors,
    title: "Acabamento de ateliê",
    text: "Bainhas, franjas e arremates feitos à mão, ponto a ponto.",
  },
  {
    icon: Truck,
    title: "Entrega cuidadosa",
    text: "Embalagem protegida e envio para todo o Brasil.",
  },
];

export function Benefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-title"
      className="bg-ink px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Por que o Ateliê Trama
        </p>
        <h2
          id="beneficios-title"
          className="mt-3 max-w-[18ch] font-display text-4xl leading-[1.1] font-semibold text-balance text-cream sm:text-5xl"
        >
          Cuidado em cada <em className="font-medium text-gold-soft">fio</em>.
        </h2>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-60px" },
                    transition: { delay: i * 0.08, duration: 0.7, ease: EASE },
                  })}
              className="flex gap-4 rounded-2xl border border-gold/15 bg-plum-deep p-5 sm:block sm:p-7"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-plum text-gold">
                <Icon aria-hidden className="size-6" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream sm:mt-5 sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-1.5 text-base leading-relaxed text-mist sm:mt-2">{text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
