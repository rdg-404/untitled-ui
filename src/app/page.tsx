import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="to-zinc-900 text-3xl font-medium">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between  border-b border-zinc-900 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-700">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg border border-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-950"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
