import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className=" focus:ring-3 min-h-[120px] w-full resize-y rounded-lg border border-zinc-900 bg-zinc-900 px-3 py-2 text-zinc-400 shadow-sm outline-none focus:border-violet-500"
      {...props}
    />
  )
}
