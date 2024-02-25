import Head from "next/head";
import { ListAccounts } from "./(components)/list-accounts";
import { kaeruService } from "~/services/kaeru";
import dayjs from "dayjs";
import { ReceiptHistoryChart } from "./(components)/receipt-history-chart";
import { ExpensesHistoryChart } from "./(components)/expenses-chart";

export default async function Home() {
  const { data: receipts } = await kaeruService.post("/receita/total_mensal/", {
    start_date: dayjs().subtract(1, "year").format("YYYY-MM-DD"),
    end_date: dayjs().format("YYYY-MM-DD"),
  });

  const { data: expenses } = await kaeruService.post("/despesa/total_mensal/", {
    start_date: dayjs().subtract(1, "year").format("YYYY-MM-DD"),
    end_date: dayjs().format("YYYY-MM-DD"),
  });

  return (
    <div className="flex flex-1 flex-col">
      <Head>
        <title>Kaeru - Início</title>
      </Head>

      <ListAccounts />

      <section className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h6>Receitas</h6>
          <ReceiptHistoryChart receipts={receipts} />
        </div>
        <div className="flex flex-col gap-4">
          <h6>Despesas</h6>
          <ExpensesHistoryChart expenses={expenses} />
        </div>
      </section>
    </div>
  );
}
