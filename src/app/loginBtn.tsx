import { getServerAuthSession } from "~/server/auth";
import LoginBtn2 from "./loginbtn2";
import { kaeruService } from "~/services/kaeru";

export default async function LoginBtn() {
  const authSession = await getServerAuthSession();
  const { data } = await kaeruService.get("/usuario");
  console.log({ data });

  return <LoginBtn2 authSession={authSession} />;
}
