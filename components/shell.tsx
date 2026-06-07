import Link from "next/link";
import { BarChart3, FileText, FolderKanban, Library, Settings, Sparkles } from "lucide-react";

const nav = [
  ["Dashboard", "/", FolderKanban],
  ["New Project", "/projects/new", Sparkles],
  ["Reports", "/projects/demo-crm-reporting/reports", FileText],
  ["Saved", "/projects/demo-crm-reporting/saved", Library],
  ["Settings", "/settings", Settings]
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#312e81_0,transparent_35%),radial-gradient(circle_at_top_right,#0f766e_0,transparent_28%),#020617]">
    <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-slate-950/80 p-6 backdrop-blur lg:block">
      <Link href="/" className="flex items-center gap-3"><div className="rounded-2xl bg-violet-500 p-3"><BarChart3 /></div><div><div className="text-xl font-black">DemandOS</div><div className="text-xs text-slate-400">PMM-grade demand intelligence</div></div></Link>
      <nav className="mt-10 space-y-2">{nav.map(([label, href, Icon]) => <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white"><Icon className="h-4 w-4" />{label}</Link>)}</nav>
      <div className="card mt-10 p-4 text-sm text-slate-300"><b className="text-white">Evidence-first principle</b><p className="mt-2">Every conclusion in DemandOS links back to public or user-provided source records.</p></div>
    </aside>
    <main className="lg:pl-72"><div className="mx-auto max-w-7xl px-5 py-8 lg:px-10">{children}</div></main>
  </div>;
}
