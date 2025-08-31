import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/landing/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breck's Car Rental - Vehicle Partnership Program",
  description:
    "Earn passive income with Breck's Car Rental Vehicle Partnership Program. Transparent revenue sharing, professional management, and reliable car rental services in the Philippines.",
  keywords: [
    "car rental",
    "vehicle partnership",
    "passive income",
    "Philippines",
    "revenue sharing",
    "Breck's Car Rental",
  ],
  authors: [{ name: "Breck's Car Rental" }],
  openGraph: {
    title: "Breck's Car Rental - Vehicle Partnership Program",
    description:
      "Join our vehicle partnership program for worry-free income opportunities in the Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
