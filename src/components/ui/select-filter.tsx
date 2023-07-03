import { Icons } from "./Icons"
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "./select"

interface IProps {
  noTitle?: boolean
  title?: string
  defaultValue?: string
  placeholder?: string
  options?: {
    name: string
    value: string
  }[]
  onChange?: (value: string) => void
  loading?: boolean
}

export default function SelectFilter({
  noTitle,
  title,
  defaultValue,
  placeholder,
  options,
  onChange,
  loading,
}: IProps) {
  return (
    <div className="flex items-center gap-3">
      {!noTitle && (
        <p className="text-sm capitalize text-neutral-4">{title ?? "show"}:</p>
      )}
      <SelectRoot
        defaultValue={defaultValue ?? undefined}
        onValueChange={onChange}
      >
        <SelectTrigger className="flex items-center gap-3 text-sm text-neutral-5 outline-none">
          <SelectValue
            placeholder={
              <span className="font-bold uppercase">{placeholder}</span>
            }
          />
          <SelectIcon>
            <Icons.chevronDown className="w-4" />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectViewport>
            {loading ? (
              <div className="grid h-24 place-items-center">loading...</div>
            ) : (
              options?.map(({ name, value }) => (
                <SelectItem key={value} value={value}>
                  <SelectItemText>{name}</SelectItemText>
                  <SelectItemIndicator>
                    <Icons.check className="w-4" />
                  </SelectItemIndicator>
                </SelectItem>
              ))
            )}
          </SelectViewport>
        </SelectContent>
      </SelectRoot>
    </div>
  )
}