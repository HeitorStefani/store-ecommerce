import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import {Footer} from "@/components/footer";
import Nav from "@/components/nav";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja",
  description: "Loja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
