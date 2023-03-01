'use client'
import { useAnimalStore } from '@/store/animal'
import { Tab } from '@headlessui/react'
import AddAnimalForm from '../form/AddAnimalForm'
import AddCempekForm from '../form/AddCempekForm'

export default function AnimalAddWrapper() {
  const { animal_type } = useAnimalStore()

  const categories =
    animal_type === 'cow'
      ? {
          Pejantan: <AddAnimalForm animal_type={animal_type} gender="male" />,
          Betina: <AddAnimalForm animal_type={animal_type} gender="female" />,
        }
      : {
          Pejantan: <AddAnimalForm animal_type={animal_type} gender="male" />,
          Betina: <AddAnimalForm animal_type={animal_type} gender="female" />,
          Cempek: <AddCempekForm animal_type={animal_type} />,
        }

  return (
    <Tab.Group>
      <Tab.List className="flex items-center justify-between gap-3">
        <div>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `border-b py-3 px-4 text-xs focus:outline-none ${
                  selected
                    ? 'border-primary-3 font-medium'
                    : 'font-light hover:border-primary-3'
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </div>
      </Tab.List>

      <Tab.Panels>
        {Object.values(categories).map((content: any, idx) => (
          <Tab.Panel as="div" key={idx} className="mt-5 focus:outline-none">
            {content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
