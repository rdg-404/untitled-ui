
export default function Home() {
  return (
    <div className="p-8 bg-zinc-50 text-slate-900 dark:bg-zinc-900 dark:text-slate-200 h-screen">
      <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-emerald-500">Hello tailwind</h1>
      <button className="bg-emerald-600 text-slate-950 dark:bg-emerald-700 dark:text-slate-50 px-4 py-2 rounded font-medium mt-4 enabled:hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed">
        SignIn
      </button>
    </div>
  )
}
