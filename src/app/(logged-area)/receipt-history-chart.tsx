"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function ReceiptHistoryChart({ receipts }: { receipts: any[] }) {
  console.log({ receipts });

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={receipts}>
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
