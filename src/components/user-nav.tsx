import { LogOut, Menu } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { SidebarNavItem } from "~/types/Sidebar";

export function UserNav({
  session,
  items,
}: {
  session: Session | null;
  items: SidebarNavItem[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative rounded-full" size="icon">
          <Menu className="flex h-5 w-5 shrink-0 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Kaeru</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items.map((item) =>
            item?.items?.map((i) => (
              <Link href={i.href}>
                <DropdownMenuItem>{i.title}</DropdownMenuItem>
              </Link>
            )),
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-3 w-3" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
