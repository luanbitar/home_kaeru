import { useProtectedPage } from "~/hooks/useProtectedPage";
import { SidebarNav } from "~/components/ui/sidebar-nav";
import { ScrollArea } from "~/components/ui/scroll-area";

export default async function LoggedAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await useProtectedPage();

  return (
    <div className="relative flex min-h-screen">
      <SidebarNav />

      <ScrollArea className="px-4 py-14 sm:px-6 lg:px-8">{children}</ScrollArea>
    </div>
  );
}
