"use client";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "~/components/aceternity/3d-card";

export function ListAccountCard({ account }: { account: any }) {
  return (
    <CardContainer className="flex w-full flex-1" translateZ={12}>
      <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] p-6 hover:shadow-2xl hover:shadow-primary/[0.1] dark:border-white/[0.2]">
        <CardItem as="h5" translateZ="50" className="text-xl font-bold">
          {account?.nome_conta}
        </CardItem>

        <CardItem as="p" translateZ="60" className="mt-2 max-w-sm text-sm">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(account?.saldo_atual ?? 0)}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
