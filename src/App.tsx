import { Mail } from 'lucide-react'
import { Benefits } from '@/components/sections/benefits'
import { Hero } from '@/components/sections/hero'

function App() {
  return (
    <>
      <Hero />
      <Benefits />
      <section
        id="contato"
        aria-labelledby="contato-title"
        className="border-t border-gold/15 bg-plum-deep px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-xl text-center">
          <h2 id="contato-title" className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            Vamos conversar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Conte o que você imagina e respondemos com ideias, prazos e valores.
          </p>
          <a
            href="mailto:contato@ateliertrama.com.br"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/50 px-7 font-semibold text-gold-soft transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <Mail aria-hidden className="size-5" />
            contato@ateliertrama.com.br
          </a>
        </div>
      </section>
    </>
  )
}

export default App
