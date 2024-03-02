import Head from "next/head";
import { ListAccounts } from "./(components)/list-accounts";
import { kaeruService } from "~/services/kaeru";
import dayjs from "dayjs";
import { ReceiptHistoryChart } from "./(components)/receipt-history-chart";
import { ExpensesHistoryChart } from "./(components)/expenses-chart";
import { PageSpotlight } from "./(components)/page-spotlight";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

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
      <PageSpotlight />

      <ListAccounts />

      <section className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Receitas</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ReceiptHistoryChart receipts={receipts} />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Despesas</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ExpensesHistoryChart expenses={expenses} />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
