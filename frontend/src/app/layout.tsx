import { getBodyFontClass } from '@/lib/fonts';
import "./scss/globals.scss";
import { Header, Footer, PageClient } from '@/components/';
import { MainContainer } from '@/components';
import { DraftModeStatus } from '@/components/utils/DraftModeStatus';
import { getGraphqlData } from "@/lib/graphql";
import { GET_GLOBAL } from "@/lib/strapi/queries/global";
import type { GlobalData } from '@/lib/strapi/types/global';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let globalData: GlobalData | null = null;

  globalData = await getGraphqlData(GET_GLOBAL) as GlobalData;
  return (
    <html lang="en">
      <body className={getBodyFontClass()}>
        <Header globalData={globalData} />
        <MainContainer>
          {children}
          {process.env.NODE_ENV === 'development' && <DraftModeStatus />}
        </MainContainer>
        <Footer globalData={globalData} />
        <PageClient />
      </body>
    </html>
  );
}
