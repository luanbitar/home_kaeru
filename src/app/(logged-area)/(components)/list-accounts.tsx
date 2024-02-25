import { kaeruService } from "~/services/kaeru";
import { ListAccountCard } from "./list-account-card";

export async function ListAccounts() {
  const { data: accounts } = await kaeruService.get("/conta/");

  return (
    <div className="flex flex-col gap-4">
      <h1>Contas</h1>

      <section className="grid grid-cols-2 gap-3">
        {accounts.map((account: any) => (
          <ListAccountCard key={account.id} account={account} />
        ))}
      </section>
    </div>
  );
}
