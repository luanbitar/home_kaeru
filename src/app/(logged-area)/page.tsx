import Head from "next/head";
import LoginBtn from "../loginBtn";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { ChartExample } from "../chart-example";
import { kaeruService } from "~/services/kaeru";

export default async function Home() {
  const { data: accounts } = await kaeruService.get("/conta/");
  console.log({ accounts });
  return (
    <div>
      <Head>
        <title>Kaeru - Início</title>
      </Head>

      <LoginBtn />

      <ModeToggle />

      <div className="h-28 w-full max-w-96">
        <ChartExample />
      </div>
    </div>
  );
}
