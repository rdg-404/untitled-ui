import { Button } from '@/components/Button'
import { formatBytes } from '@/utils/format-bytes'
import { UploadCloud, Trash, CheckCircle2 } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    wrapper:
      'group flex items-start gap-4 rounded-lg border border-zinc-900 p-4',

    icon: 'rounded-full  bg-violet-950 p-2 text-violet-400',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        wrapper: '',
      },
      complete: {
        wrapper: 'border-zinc-900',
      },
      error: {
        wrapper: 'bg-zinc-950 border-error-400',
        icon: 'bg-error-800 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-600 hover:bg-error-900',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { wrapper, icon, deleteButton } = fileItem({ state })
  return (
    <div className={wrapper()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload Failed! Try again...
            </span>
            <span className="text-error-500 text-sm ">{name}</span>
          </div>
          <button
            type="button"
            className="text-error-700 hover:text-error-900 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500 ">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-500"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm  font-medium text-zinc-700 ">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-800 text-violet-400" />
      ) : (
        <Button type="button" variant="icon" className={deleteButton()}>
          <Trash className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
