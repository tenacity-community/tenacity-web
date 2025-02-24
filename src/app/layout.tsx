/* eslint-disable no-unused-vars */
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
// import localFont from "next/font/local";
import { Space_Grotesk } from "@next/font/google";
import "./globals.css";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  // variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

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
      <body className={`${spacegrotesk.className}`} >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
