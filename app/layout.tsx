import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const primaryFont = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AI Mock Interviews - Practice and Prepare",
  description:
    "Prepare for your AI interviews with our AI-powered mock interviews.",
};

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} antialiased dark pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
