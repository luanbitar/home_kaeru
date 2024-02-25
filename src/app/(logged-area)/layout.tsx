import { useProtectedPage } from "~/hooks/useProtectedPage";
import { SidebarNav } from "~/components/sidebar-nav";
import { getServerAuthSession } from "~/server/auth";

export default async function LoggedAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await useProtectedPage();
  const session = await getServerAuthSession();

  return (
    <div className="relative flex min-h-screen w-full">
      <SidebarNav session={session} />

      <main className="flex flex-1 flex-col px-4 py-14 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
