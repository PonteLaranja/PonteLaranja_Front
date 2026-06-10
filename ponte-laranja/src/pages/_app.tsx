import "../styles/globals.css"
import type { AppProps } from "next/app";

import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-texto-titulo",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700" , "800", "900"]
});
// oxi mn
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-texto-padrao",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700" , "800"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jakarta.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
