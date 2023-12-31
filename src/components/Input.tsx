import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

function Root(props: InputRootProps) {
  return (
    <div
      className=" focus-within:ring-3 flex  w-full items-center gap-2 rounded-lg border border-zinc-900 px-3 py-2 shadow-sm focus-within:border-violet-500  dark:border-zinc-900"
      {...props}
    />
  )
}

type InputPrefixProps = ComponentProps<'div'>

function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

function Control(props: InputControlProps) {
  return (
    <input
      className=" flex-1 border-0 bg-transparent p-0 text-zinc-400 placeholder-zinc-600 outline-none dark:border-zinc-900"
      {...props}
    />
  )
}

const Input = {
  Root,
  Control,
  Prefix,
}

export { Input }
