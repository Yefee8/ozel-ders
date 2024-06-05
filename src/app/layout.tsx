import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Almanca, İngilizce, Matematik özel dersleri - Erdem ve Zeynep Hoca'dan randevu alın.",
  description:
    "Almanca, İngilizce ya da Ortaokul öğrencileri için matematik dersi arayıyorsanız biçilmiş kaftandasınız. Erdem ve Zeynep Hoca'dan randevu alın.",
  keywords: [
    "Almanca Kursu",
    "Almanca Dersi",
    "Almanca Özel Ders",
    "İngilizce Özel Ders",
    "Matematik Özel Ders",
    "İngilizce Ders",
    "İngilizce Kurs",
    "Matematik Ders",
    "Erdem Hoca",
    "Zeynep Hoca",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={inter.className + " flex flex-col items-center text-primary"}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
