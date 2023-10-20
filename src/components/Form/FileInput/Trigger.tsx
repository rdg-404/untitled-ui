'use client'
import { UploadIcon } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-900 px-6 py-4 text-center text-zinc-500 shadow-sm  hover:border-zinc-800 hover:bg-zinc-900 hover:text-violet-200"
    >
      <div className=" rounded-full bg-violet-900  p-4  group-hover:bg-violet-600">
        <UploadIcon className="h-5 w-5  text-violet-400 " />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-500">Click to upload</span>{' '}
          or drag and drop
        </span>

        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
