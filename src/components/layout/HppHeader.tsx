import Navbar from '@/components/layout/Navbar'
import { Button } from '@/components/shared'
import { DownloadCloud } from 'lucide-react'

export default function HppHeader() {
  return (
    <Navbar menu={menu} className="mb-6 flex items-center justify-between">
      <Button
        variant="outline"
        size="sm"
        className="gap-3 rounded-xl uppercase"
      >
        <DownloadCloud className="h-4 w-4" /> download
      </Button>
    </Navbar>
  )
}

const menu = [
  { name: 'Kambing', link: `/hpp/goat` },
  { name: 'Domba', link: `/hpp/sheep` },
  { name: 'Sapi', link: `/hpp/cow` },
]