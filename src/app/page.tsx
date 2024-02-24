import Head from "next/head";
import LoginBtn from "./loginBtn";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { ChartExample } from "./chart-example";
import { useProtectedPage } from "~/hooks/useProtectedPage";

export default async function Home() {
  await useProtectedPage();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Home page</title>
      </Head>

      <LoginBtn />

      <ModeToggle />

      <div className="h-28 w-full max-w-96">
        <ChartExample />
      </div>
    </div>
  );
}
