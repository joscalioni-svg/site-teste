import { motion } from 'framer-motion'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Site Teste</h1>
        <p className="mt-4 text-slate-400">React + Vite + Tailwind CSS + Framer Motion</p>
      </motion.div>
    </main>
  )
}

export default App
