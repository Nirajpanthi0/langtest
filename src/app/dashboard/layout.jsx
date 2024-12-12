import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function DashboardLayout({
  children
}) {
  return (
    (<div className="flex min-h-screen flex-col">
      <header
        className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4">
        <div className="flex items-center gap-2 font-semibold">
          TangTest Trale exam
        </div>
        <UserNav />
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-4 p-4">
            <MainNav />
          </div>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>)
  );
}

