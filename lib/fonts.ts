import { JetBrains_Mono as FontMono, Inter as FontSans, Rubik as FontCode } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})


//check how this works
export const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
});
