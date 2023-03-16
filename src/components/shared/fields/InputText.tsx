import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputTextProps {
  name: string
  label: string
  isSecured?: boolean
}

const InputText: FC<InputTextProps> = ({ name, label, isSecured }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext()

  return (
    <>
      <div className="relative">
        <input
          id={label}
          type={isSecured ? (showPassword ? 'text' : 'password') : 'text'}
          className={cn(
            'peer block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm  focus:outline-none focus:ring-0 disabled:border-neutral-3 disabled:bg-[#ebebeb] disabled:text-neutral-4',
            errors[name]
              ? 'border-error focus:border-error'
              : 'border-neutral-4 focus:border-black'
          )}
          placeholder=" "
          disabled={isSubmitting}
          {...register(name)}
        />
        <label
          htmlFor={label}
          className={cn(
            'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2',
            errors[name]
              ? 'text-error peer-focus:text-error'
              : 'text-neutral-4 peer-focus:text-black'
          )}
        >
          {label}
        </label>
        {isSecured && (
          <button
            type="button"
            className={cn('absolute inset-y-0 right-0 mr-4')}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye
                className={errors[name] ? 'stroke-error' : 'stroke-neutral-4'}
              />
            ) : (
              <EyeOff
                className={errors[name] ? 'stroke-error' : 'stroke-neutral-4'}
              />
            )}
          </button>
        )}
      </div>
      <span className="text-[10px] text-error">
        {errors[name]?.message?.toString()}
      </span>
    </>
  )
}

export default InputText
