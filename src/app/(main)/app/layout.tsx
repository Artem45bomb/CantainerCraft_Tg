import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/widgets/NavBar";
import Provider from "@/features/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main
            style={{ maxHeight: "100vh" }}
            className={"w-full h-full relative overflow-hidden flex"}
          >
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
