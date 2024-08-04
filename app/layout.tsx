import type { Metadata } from "next";
import "./globals.css";
import { Inter, Whisper } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const whisper = Whisper({
  subsets: ["latin"],
  variable: "--font-whisper",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spevak.dev",
  description:
    "Študent, tvorca webových stránok, aplikácii a správca serverov a sieti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body
        className={`${inter.className} ${whisper.variable} font-inter antialiased font-semibold bg-white bg-grid-black/[0.08] dark:bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
