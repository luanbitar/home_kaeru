import Head from "next/head";
import { kaeruService } from "~/services/kaeru";
import dayjs from "dayjs";
import { PageSpotlight } from "../(components)/page-spotlight";
import { ReceiptHistoryChart } from "../(components)/receipt-history-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Receipt } from "~/types/Receipt";
import { Separator } from "~/components/ui/separator";

const ReceiptItem = ({ receipt }: { receipt: Receipt }) => {
  return (
    <div className="group flex flex-col">
      <div className="flex justify-between">
        <p>{receipt?.descricao}</p>
        <p>{receipt?.valor}</p>
      </div>
      <div className="flex justify-between text-slate-500">
        <p>{receipt?.conta?.nome_conta}</p>
        <span>{dayjs(receipt?.data_lancamento).format("DD/MM/YY")}</span>
      </div>
      <Separator className="mt-2 group-last:hidden" />
    </div>
  );
};

export default async function ReceiptsPage() {
  const { data: receipts } = await kaeruService.post<Receipt[]>(
    "/receita/receitas_by_periodo/",
    {
      start_date: dayjs().subtract(1, "year").format("YYYY-MM-DD"),
      end_date: dayjs().format("YYYY-MM-DD"),
    },
  );
  const { data: receiptsHistory } = await kaeruService.post(
    "/receita/total_mensal/",
    {
      start_date: dayjs().subtract(1, "year").format("YYYY-MM-DD"),
      end_date: dayjs().format("YYYY-MM-DD"),
    },
  );

  return (
    <div className="flex flex-1 flex-col">
      <Head>
        <title>Kaeru - Receitas</title>
      </Head>
      <PageSpotlight />

      <section className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Receitas</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ReceiptHistoryChart receipts={receiptsHistory} />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col">
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Histórico</CardTitle>
              <CardDescription>Receitas recentes</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {receipts.map((receipt) => (
                <ReceiptItem key={receipt?.id} receipt={receipt} />
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
