"use client";

import * as React from "react";

import { UserLoginForm } from "./user-login-form";
import Link from "next/link";
import { UserCreateAccountForm } from "./user-create-account-form";

interface UserAuthFormProps {
  createUser: (email: string, password: string) => Promise<void>;
}

const ChangeFormTypeText = (
  props: React.HTMLAttributes<HTMLParagraphElement>,
) => (
  <p
    className="cursor-pointer px-8 text-center text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
    {...props}
  />
);

export async function UserAuthForm({ createUser }: UserAuthFormProps) {
  const [authFormMode, setAuthFormMode] = React.useState<
    "login" | "new-account"
  >("login");

  return (
    <>
      {authFormMode === "login" ? (
        <>
          <UserLoginForm />
          <ChangeFormTypeText onClick={() => setAuthFormMode("new-account")}>
            Crie sua conta
          </ChangeFormTypeText>
        </>
      ) : (
        <>
          <UserCreateAccountForm createUser={createUser} />
          <ChangeFormTypeText onClick={() => setAuthFormMode("login")}>
            Entre com sua conta
          </ChangeFormTypeText>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </>
      )}
    </>
  );
}
