import VolumetricStudioDemo from '@/components/ui/volumetric-studio-demo'
import WovenClothDemo from '@/components/ui/woven-cloth-demo'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-neutral-950 p-4 sm:p-8">
      <VolumetricStudioDemo />
      <WovenClothDemo />
    </div>
  )
}

export default App
