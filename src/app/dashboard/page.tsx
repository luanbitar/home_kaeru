import Head from "next/head";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { useProtectedPage } from "~/hooks/useProtectedPage";
import LoginBtn from "../loginBtn";

export default async function DashboardPage() {
  await useProtectedPage();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Head>
        <title>dashboard</title>
      </Head>

      <ModeToggle />

      <LoginBtn />

      <p>dashboard</p>
    </div>
  );
}
