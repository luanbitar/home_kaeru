"use client";
import dayjs from "dayjs";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

export function ReceiptHistoryChart({ receipts }: { receipts: any[] }) {
  if (!receipts?.length) return null;

  const mappedReceipts = receipts.map((receipt) => ({
    month: dayjs(receipt.month).format("MMM/YY"),
    total: receipt.total,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={mappedReceipts}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="total"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>
            `R$ ${parseFloat(String(value)).toLocaleString("pt-br", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}`
          }
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
