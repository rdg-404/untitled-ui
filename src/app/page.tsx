export default function Home() {
  return (
    <div className="h-screen bg-zinc-50 p-8 text-slate-900 dark:bg-zinc-900 dark:text-slate-200">
      <h1 className="flex items-center gap-3 text-3xl font-bold before:h-8 before:w-0.5 before:bg-emerald-500 sm:text-5xl lg:text-6xl">
        Hello tailwind
      </h1>
      <button className="mt-4 rounded bg-emerald-600 px-4 py-2 font-medium text-slate-950 enabled:hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-700 dark:text-slate-50">
        SignIn
      </button>
    </div>
  )
}
