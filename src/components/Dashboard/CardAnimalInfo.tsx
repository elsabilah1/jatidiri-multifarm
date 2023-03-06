import { animalTitle } from '@/data/data'
import Card from '../Card'

interface IProps {
  data: {
    icon: any
    animal_type: string
    totalAdult: number
    totalCempek: number
  }
}

export default function CardAnimalInfo(props: IProps) {
  const { icon, animal_type, totalAdult, totalCempek } = props.data
  const title = animalTitle(animal_type)

  const content = ({ total, title, label }: any) => (
    <div className="space-y-1">
      <p className="text-xl font-semibold text-neutral-5">
        {total}
        <span className="text-[10px] font-normal text-neutral-4"> Ekor</span>
      </p>
      <p className="text-xs text-neutral-4">
        {title} <span className="font-medium">{label}</span>
      </p>
    </div>
  )

  return (
    <Card className="space-y-7 capitalize">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12">{icon}</div>
        <div>
          <h1 className="mb-1 text-xl font-semibold text-neutral-5">{title}</h1>
          <h2 className="text-xs text-neutral-4">total {title} hidup</h2>
        </div>
      </div>
      <div className="grid grid-cols-2">
        {content({ title, total: totalAdult, label: 'Dewasa' })}
        {content({ title, total: totalCempek, label: 'Cempek' })}
      </div>
    </Card>
  )
}