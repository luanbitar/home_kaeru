import { getServerAuthSession } from "~/server/auth";
import LoginBtn2 from "./loginbtn2";

export default async function LoginBtn() {
  const authSession = await getServerAuthSession();

  return <LoginBtn2 authSession={authSession} />;
}
