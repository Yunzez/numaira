import { Inter } from "next/font/google";
import CustomLayout from "./customLayout";
import "./globals.css"; 


export const metadata = {
  title: "Numaira",
  description: "Numaira's landing page, testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
