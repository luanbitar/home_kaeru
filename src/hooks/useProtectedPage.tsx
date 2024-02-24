import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export async function useProtectedPage() {
  const authSession = await getServerAuthSession();
  if (!authSession) {
    return redirect("/api/auth/signin");
  }
}
