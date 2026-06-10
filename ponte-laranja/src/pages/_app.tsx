import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import Image from "next/image";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";

const montserrat = Montserrat({
  variable: "--font-texto-titulo",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700" , "800", "900"]
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-texto-padrao",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700" , "800"]
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${jakarta.variable} ${montserrat.variable}`}></main>
  )
}
