"use client";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function ReceiptHistoryChart({ receipts }: { receipts: any[] }) {
  const mappedReceipts = receipts.map((receipt) => ({
    month: dayjs(receipt.month).format("MMM/YY"),
    total: receipt.total,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
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
          tickFormatter={(value) => `$${value}`}
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
