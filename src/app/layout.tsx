import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://physiotherapy-clinic.pages.dev";
const title = "Dr. Bhumika Jethwa | Consultant Physiotherapist in Ahmedabad";
const description =
  "Dr. Bhumika Jethwa, M.P.T (Community Health and Rehabilitation), is a Consultant Physiotherapist with 6+ years of clinical experience in Ahmedabad. Neuro, ortho, post-surgical, sports injury, antenatal & postnatal, and geriatric rehabilitation. Clinic visits, home visits, and tele-consultation available.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Dr. Bhumika Jethwa Physiotherapy",
  },
  description,
  keywords: [
    "physiotherapist in Ahmedabad",
    "physiotherapy clinic Ahmedabad",
    "Dr. Bhumika Jethwa",
    "neuro physiotherapy",
    "sports injury physiotherapy",
    "home visit physiotherapist Ahmedabad",
    "post surgical rehabilitation",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Dr. Bhumika Jethwa Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
