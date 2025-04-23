import MainLayout from "@/components/layout/MainLayout";
import { MicrosoftClarity } from "@/components/layout/MicrosoftClarity";
import { Toaster } from "@/components/shadcn/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wenke Studio",
  description:
    "Personal website showcasing work, blog, and professional experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROJECT_ID!}
      />
      <MicrosoftClarity />
    </html>
  );
}
