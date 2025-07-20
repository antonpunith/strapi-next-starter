import { Geist, Geist_Mono } from "next/font/google";
import "./scss/globals.scss";
import { Header, Footer, PageClient } from '@/components/';

import { DraftModeStatus } from '@/components/utils/DraftModeStatus'; // Ensure this import is correct
import { getGraphqlData } from "@/lib/graphql";
import { GET_GLOBAL } from "@/lib/strapi/queries/global";

// Define the type for globalData based on its expected structure
type GlobalData = {
  global: {
    header: {
      headerNavigation: Nav[];
    };
    footer: {
      footerNavigation: Nav[];
    };
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
  let globalData: GlobalData | null = null;
  let headerNav: Nav[] = [];
  let footerNav: Nav[] = [];

  globalData = await getGraphqlData(GET_GLOBAL) as GlobalData;
  headerNav = globalData?.global?.header?.headerNavigation || [];
  footerNav = globalData?.global?.footer?.footerNavigation || [];
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <Header navigation={headerNav} />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
          {children}
          {process.env.NODE_ENV === 'development' && <DraftModeStatus />}
        </div>
        <Footer navigation={footerNav} />
        <PageClient />
      </body>
    </html>
  );
}
