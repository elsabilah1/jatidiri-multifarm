import { Check, ChevronDown } from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from './Select'

interface SelectTableProps {
  name?: string
  value: string
  options: {
    name: string
    value: string
    bgColor?: string
  }[]
  onChange?: (value: string, eartag_code?: string) => void
  triggerBackground: string
  small?: boolean
  animalEarTag?: string
}

const SelectTable: FC<SelectTableProps> = ({
  name,
  value,
  options,
  onChange,
  triggerBackground,
  animalEarTag,
  small,
}) => {

  return (
    <SelectRoot name={name} defaultValue={String(value)} onValueChange={(e) => onChange && onChange(e, animalEarTag)}>
      <SelectTrigger asChild>
        <button
          className={cn(
            'min-w-36 flex items-center justify-between gap-3 rounded-md px-2 py-2 text-white outline-none',
            triggerBackground
          )}
        >
          <SelectValue className="text-white" />
          <ChevronDown className="h-4 w-4" />
        </button>
      </SelectTrigger>
      <SelectContent>
        <SelectViewport>
          {options.map(({ name, value }) => (
            <SelectItem key={(String(value))} value={(String(value))}>
              <SelectItemText className="text-white">{String(value)}</SelectItemText>
              <SelectItemIndicator>
                <Check className="h-5 w-5" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </SelectRoot>
  )
}

export default SelectTable
