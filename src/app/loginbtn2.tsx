"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export default async function LoginBtn2({
  authSession,
}: {
  authSession: Session | null;
}) {
  if (authSession) {
    return (
      <>
        Signed in as {authSession.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
