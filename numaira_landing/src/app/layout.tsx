import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useGlobalContext, GlobalProvider } from "./context/GlobalProviders";
import TopNav from "./components/topNav";
import CustomLayout from "./customLayout";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{"Numaira"}</title>
        <meta name="description" content={"Numaira's landing page, testing"} />
      </head>
      <GlobalProvider>
        <body className={inter.className}>
          <CustomLayout>{children}</CustomLayout>
        </body>
      </GlobalProvider>
    </html>
  );
}
