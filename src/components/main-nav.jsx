import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, FileText, Home, Trophy, User } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/dashboard/exam-list",
      label: "Exam List",
      icon: FileText,
    },
    {
      href: "/dashboard/live-exam",
      label: "Live Exam",
      icon: BookOpen,
    },
    {
      href: "/dashboard/results",
      label: "Results",
      icon: Trophy,
    },
    {
      href: "/dashboard/profile",
      label: "Profile",
      icon: User,
    },
  ]

  return (
    (<nav className="flex flex-col gap-2">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={pathname === route.href ? "secondary" : "ghost"}
          className={cn("w-full justify-start gap-2", pathname === route.href && "bg-secondary")}
          asChild>
          <Link href={route.href}>
            <route.icon className="h-4 w-4" />
            {route.label}
          </Link>
        </Button>
      ))}
    </nav>)
  );
}

