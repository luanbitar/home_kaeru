import { useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const getServerSideProps = async () => {
  const token = document.cookie;
  const router = useRouter();

  if (!token) {
    return router.push("/");
  }
};

export default async function Dashboard() {
  await getServerSideProps();

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}
