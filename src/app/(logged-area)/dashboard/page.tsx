import Head from "next/head";
import { ReceiptHistoryChart } from "../(components)/receipt-history-chart";
import dayjs from "dayjs";
import { kaeruService } from "~/services/kaeru";

export default async function DashboardPage() {
  const { data: receipts } = await kaeruService.post("/receita/total_mensal/", {
    start_date: dayjs().subtract(1, "year").format("YYYY-MM-DD"),
    end_date: dayjs().format("YYYY-MM-DD"),
  });

  return (
    <div className="flex flex-1 flex-col">
      <Head>
        <title>Kaeru - Dashboard</title>
      </Head>

      <ReceiptHistoryChart receipts={receipts} />
    </div>
  );
}
