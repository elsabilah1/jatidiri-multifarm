'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface IProps {
  item: { name: string; link: string; type?: string }
}

export default function NavbarLink(props: IProps) {
  const type_query = useSearchParams().get('type')
  const { name, link, type } = props.item
  const pathname = usePathname()

  const path = type_query ? `${pathname}${'?type=' + type_query}` : pathname
  const href = type ? `${link}${'?type=' + type}` : link
  const isActive = path === href

  return (
    <Link
      replace
      href={href}
      className={clsx(
        'border-b py-3 px-4 text-xs focus:outline-none',
        isActive
          ? 'border-primary-3 font-medium'
          : 'font-light hover:border-primary-3'
      )}
    >
      {name}
    </Link>
  )
}