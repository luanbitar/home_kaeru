import Head from "next/head";
import { ModeToggle } from "~/components/ui/mode-toggle";
import LoginBtn from "../../loginBtn";
import { ReceiptHistoryChart } from "../receipt-history-chart";
import dayjs from "dayjs";
import { kaeruService } from "~/services/kaeru";

export default async function DashboardPage() {
  const { data: receipts } = await kaeruService.post("/receita/total_mensal/", {
    start_date: dayjs().subtract(1, "year").format("YYYY-MM-DD"),
    end_date: dayjs().format("YYYY-MM-DD"),
  });

  return (
    <div>
      <Head>
        <title>Kaeru - Dashboard</title>
      </Head>

      <ModeToggle />

      <LoginBtn />

      <ReceiptHistoryChart receipts={receipts} />
    </div>
  );
}
