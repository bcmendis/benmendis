import { JetBrains_Mono as FontMono, Inter as FontSans, Rubik as FontCode } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})


//fontCode.className works
//how does fontSans.variable works, but not fontCode.variable?
export const fontCode = FontCode({
  weight: '300',
  subsets: ["latin"],
});
