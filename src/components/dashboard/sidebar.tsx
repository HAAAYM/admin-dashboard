import Link from "next/link";
import { navItems } from "@/lib/navigation";

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-black/5 bg-white/80 xl:block">
      <div className="flex h-20 items-center border-b border-black/5 px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            Edu Mate
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            Admin Dashboard
          </h2>
        </div>
      </div>

      <nav className="space-y-2 p-4">
        {navItems.map((item) => (
          <div key={item.title} className="rounded-2xl border border-black/5 p-3">
            {item.enabled ? (
              <Link
                href={item.href}
                className="block rounded-xl px-3 py-2 transition hover:bg-amber-50"
              >
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </Link>
            ) : (
              <div className="cursor-not-allowed rounded-xl px-3 py-2 opacity-60">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                    Soon
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
