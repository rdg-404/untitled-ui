import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-700 text-white hover:bg-violet-600',
      outline:
        'border border-zinc-900 text-zinc-700 hover:bg-zinc-300 hover:text-black',
      icon: 'rounded-md px-2 hover:bg-violet-950 shadow-none  ',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={buttonVariants({ variant })} />
}
