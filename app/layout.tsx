import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'SSDEXPERTZONE | Best storage deals and SSD price comparison',
  description: 'Compare SSDs, HDDs, and NVMe drives by price, capacity, performance, and value before you buy.',
  openGraph: {
    title: 'SSDEXPERTZONE | Best storage deals and SSD price comparison',
    description: 'Compare SSDs, HDDs, and NVMe drives by price, capacity, performance, and value before you buy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SSDEXPERTZONE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
    <head>
      <Script
      async 
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2560579372386335"
     crossOrigin="anonymous"
     strategy="afterInteractive"
     />
    </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-inter">
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
