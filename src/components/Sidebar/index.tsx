import { Search } from 'lucide-react'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className=" space-y-6 border-r border-zinc-200 px-5 py-8 dark:border-zinc-900 dark:text-zinc-300">
      <Logo />

      <div className=" mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 shadow-sm dark:border-zinc-700">
        <Search className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        <input
          className=" flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:border-zinc-900"
          placeholder="Search"
        />
      </div>

      <MainNavigation />
    </aside>
  )
}
