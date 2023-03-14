'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shared/DropdownMenu'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import { useRouter } from 'next/navigation'
import { ChevronDown } from '../../shared/Icons'

const HeaderMenu = () => {
  const router = useRouter()

  const signoutHandler = async () => {
    await fetch('/api/signout')
    router.replace('/signin')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 outline-none">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <div>
            <p className="mb-1 text-sm">John Doe</p>
            <p className="rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light">
              Super Admin
            </p>
          </div>
          <ChevronDown />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount className="w-56">
        <DropdownMenuGroup className="p-5">
          <DropdownMenuLabel className="mb-3 font-semibold">
            Account
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.replace('/edit-profile')}>
            Edit Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.replace('/change-password')}>
            Change Password
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="p-5">
          <DropdownMenuLabel className="mb-3 font-semibold">
            Manage
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.replace('/role-management')}>
            Role Management
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-5" onClick={signoutHandler}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderMenu