import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {" "}
      <Head>
        <title>Peeple Dashboard</title>
        <meta name="description" content="PeepleDAO Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Navbar />

        {children}
      </main>
    </>
  );
}
