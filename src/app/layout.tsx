import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatsApp",
  description: "A WhatsApp clone built with Next.js and Convex with support of OPEN AI and Dalle-3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <ConvexClientProvider>
            {children}
            <Toaster/>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
