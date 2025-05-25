import type { Metadata } from "next";
import { Poppins, Inter, Space_Grotesk, Quicksand } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
  icons: {
    icon: "/LogoMouhibOtman(1).svg",
    shortcut: "/LogoMouhibOtman(1).svg",
    apple: "/LogoMouhibOtman(1).svg",
  },  openGraph: {
    title: "Otman Mouhib | Computer Engineer",
    description: "Portfolio of Otman Mouhib - Computer Engineer specializing in AI, IoT, Full-Stack Development and Data Engineering",
    url: "https://otman-portfolio.vercel.app",
    siteName: "Otman Mouhib Portfolio",
    images: [
      {
        url: "/profile_photo.jpg",
        width: 1200,
        height: 630,
        alt: "Otman Mouhib - Computer Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otman Mouhib | Computer Engineer",
    description: "Portfolio of Otman Mouhib - Computer Engineer specializing in AI, IoT, Full-Stack Development and Data Engineering",
    images: ["/profile_photo.jpg"],
  },
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
      </head>      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} ${quicksand.variable} font-sans antialiased`}      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
