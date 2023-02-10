import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Peeple Dashboard</title>
        <meta name="description" content="PeepleDAO Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
}
