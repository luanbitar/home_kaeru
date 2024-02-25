"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavItem } from "~/types/Sidebar";
import { cn } from "~/lib/utils";
import { UserNav } from "./user-nav";
import { Session } from "next-auth";
import { ModeToggle } from "./ui/mode-toggle";

const defaultConfig: SidebarNavItem[] = [
  {
    title: "Kaeru",
    items: [
      {
        title: "Início",
        href: "/",
      },
      {
        title: "Dashboard",
        href: "/dashboard",
      },
    ],
  },
];
export interface SidebarNavProps {
  items?: SidebarNavItem[];
  session: Session | null;
}

export function SidebarNav({
  items = defaultConfig,
  session,
}: SidebarNavProps) {
  const pathname = usePathname();

  if (!items.length) return null;

  return (
    <>
      <div className="sticky top-0 hidden h-screen w-[300px] px-4 py-8 md:block">
        {items.map((item, index) => (
          <div key={index} className={cn("pb-8")}>
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
              {item.title}
            </h4>
            {item.items ? (
              <SidebarNavItems items={item.items} pathname={pathname} />
            ) : null}
          </div>
        ))}
      </div>
      <header className="fixed top-0 z-[1] flex w-screen items-center justify-between bg-background px-6 py-2">
        <h1>Kaeru</h1>

        <div>
          <ModeToggle />
          <UserNav session={session} items={items} pathname={pathname} />
        </div>
      </header>
    </>
  );
}

interface SidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function SidebarNavItems({ items, pathname }: SidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center rounded-md p-2 hover:underline",
              {
                "bg-muted": pathname === item.href,
              },
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
          </span>
        ),
      )}
    </div>
  ) : null;
}
