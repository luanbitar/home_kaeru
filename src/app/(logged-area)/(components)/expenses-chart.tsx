"use client";
import dayjs from "dayjs";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

export function ExpensesHistoryChart({ expenses }: { expenses: any[] }) {
  if (!expenses) return null;

  const mappedExpenses = expenses.map((expense) => ({
    month: dayjs(expense.month).format("MMM/YY"),
    total: expense.total,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={mappedExpenses}>
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
          className="fill-rose-600"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
