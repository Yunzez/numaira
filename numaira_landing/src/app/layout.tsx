import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useGlobalContext, GlobalProvider } from "./context/GlobalProviders";
import TopNav from "./components/topNav";
import CustomLayout from "./customLayout";
import Head from "next/head"; // Import Head component
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{"Numaira"}</title>
        <meta name="description" content={"Numaira's landing page, testing"} />
      </Head>

      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CustomLayout>{children}</CustomLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
