import { Geist, Geist_Mono } from "next/font/google";
import "./scss/globals.scss";
import { getGlobalData } from "@/lib/globalData";
import { Header, Footer, PageClient } from '@/components/';
import { DraftModeStatus } from './DraftModeStatus'; // Ensure this import is correct

// Define the type for globalData based on its expected structure
type GlobalData = {
  header: {
    headerNavigation: Nav[];
  };
  footer: {
    footerNavigation: Nav[];
  };
};

interface Nav {
  id: string; title: string; slug: string
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData() as GlobalData;
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header navigation={globalData.header.headerNavigation} />
        {children}
        <DraftModeStatus />
        <Footer navigation={globalData.footer.footerNavigation} />
        <PageClient />
      </body>
    </html>
  );
}
