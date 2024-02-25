import { getServerAuthSession } from "~/server/auth";
import { UserAuthForm } from "./user-auth-form";
import { Suspense } from "react";
import { kaeruService } from "~/services/kaeru";

export default async function LoginPage() {
  const createUser = async (email: string, password: string) => {
    "use server";
    await kaeruService.post("/usuario/", {
      email,
      password,
      password_confirm: password,
      is_staff: true,
      is_superuser: true,
    });
  };

  return (
    <>
      <div className="container relative flex h-[800px] flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Kaeru
          </div>
        </div>
        <div className="flex w-full lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Suspense>
              <UserAuthForm createUser={createUser} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
