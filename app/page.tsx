import { Button } from "@/components/ui/button";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div>
    <Header />
    <main className="min-h-screen bg-white">
      <p className="text-black">hello</p>
      <div>
      <Button>Click me</Button>
      </div>
    </main>
    </div>
  )
}
