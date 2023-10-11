
export default function Home() {
  return (
    <div className="p-8 bg-zinc-950 text-slate-100 h-screen">
      <h1 className="font-bold text-5xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-emerald-500">Hello tailwind</h1>
      <button disabled className="bg-emerald-500 px-4 py-2 rounded font-medium mt-4 enabled:hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed">
        SignIn
      </button>
    </div>
  )
}
