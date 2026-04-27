import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteProvider } from "@/components/providers/SiteProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentalCare - Toshkentdagi ishonchli stomatologingiz",
  description:
    "DentalCare bilan Toshkentda yuqori darajadagi stomatologik yordamdan bahramand bo'ling. Bizning mutaxassislar jamoamiz tabassumingiz sog'lom va yorqin bo'lishini ta'minlash uchun muntazam tekshiruvlardan tortib, ilg'or davolash usullarigacha bo'lgan keng qamrovli xizmatlarni taklif etadi. Bugun uchrashuvga yoziling va shaxsiylashtirilgan stomatologik yordamning farqini kashf eting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
