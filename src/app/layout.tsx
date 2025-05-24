import type { Metadata } from "next";
import { Poppins, Inter, Space_Grotesk, Quicksand } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Otman Mouhib | Computer Engineer",
  description: "Portfolio of Otman Mouhib - Computer Engineer specializing in AI, IoT, Full-Stack Development and Data Engineering",
  keywords: ["Computer Engineer", "AI", "IoT", "Full-Stack Development", "Data Engineering", "Portfolio"],
  authors: [{ name: "Otman Mouhib" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} ${quicksand.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
