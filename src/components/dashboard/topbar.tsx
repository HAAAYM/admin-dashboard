export function Topbar() {
  return (
    <header className="flex min-h-20 flex-wrap items-center justify-between gap-4 border-b border-black/5 bg-white/70 px-6 py-4 backdrop-blur">
      <div>
        <p className="text-sm font-medium text-amber-700">Control Center</p>
        <h1 className="text-2xl font-semibold text-slate-900">Overview</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-black/5 bg-slate-50 px-4 py-2 text-sm text-slate-600">
          Routes ready: <span className="font-semibold text-slate-900">/dashboard</span>
        </div>
        <div className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">
          Foundation Ready
        </div>
      </div>
    </header>
  );
}
