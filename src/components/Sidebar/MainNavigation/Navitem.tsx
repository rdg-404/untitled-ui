import { ChevronDown, Home } from 'lucide-react'

export function NavItem() {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-950"
    >
      <Home className="h-5 w-5 text-zinc-500" />

      <span className="font-medium text-slate-100 group-hover:text-slate-300">
        Home
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-zinc-400" />
    </a>
  )
}
