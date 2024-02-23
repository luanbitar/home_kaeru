"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

export default async function LoginBtn2({
  authSession,
}: {
  authSession: Session | null;
}) {
  if (authSession) {
    return (
      <>
        Signed in as {authSession.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}
