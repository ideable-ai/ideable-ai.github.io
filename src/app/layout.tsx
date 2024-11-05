import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP, Jost } from "next/font/google";
import "the-new-css-reset/css/reset.css";
import "@/styles/globals.scss";

import GlobalHeader from "@/components/global-header";
import GlobalFooter from "@/components/global-footer";
import CssVarsScale from "@/components/css-vars/scale";
import CssVarsRandomColor from "@/components/css-vars/random-color";

export const metadata: Metadata = {
  title: {
    default: "ideable",
    template: "%s | ideable",
  },
  openGraph: {
    title: {
      default: "ideable",
      template: "%s | ideable",
    },
    images: "https://ideable.ai/og.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"], // なんでサブセットとしてlatin文字が必要なのかはわからん
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${jost.variable}`}>
      <CssVarsScale />
      <CssVarsRandomColor />

      <Script src="https://www.youtube.com/iframe_api"></Script>

      <body className={`${notoSansJP.className}`}>
        <GlobalHeader />
        <main>
          {children}
          <GlobalFooter />
        </main>
      </body>
    </html>
  );
}
