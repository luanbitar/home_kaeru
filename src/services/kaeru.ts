import axios from "axios";
import { env } from "process";
import { getServerAuthSession } from "~/server/auth";

export const kaeruService = axios.create({
  baseURL: env.KAERU_SERVICE_URL,
});

kaeruService.interceptors.request.use(async (config) => {
  const authSession = await getServerAuthSession();
  const accessToken = authSession?.user.accessToken;
  if (!accessToken) return config;

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
