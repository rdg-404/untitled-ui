import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/rdg-404.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Rodrigo Paiva
        </span>
        <span className="truncate text-sm text-zinc-500">
          rodrigo@rocketseat.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-violet-950"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
