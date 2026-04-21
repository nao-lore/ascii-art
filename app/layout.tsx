import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "ASCII Art Generator - Create Text Art Online | ascii-art",
  description:
    "Free online ASCII art generator. Convert text to large ASCII banner art, create text boxes, and browse pre-made decorations. Copy and paste instantly.",
  keywords: [
    "ascii art generator",
    "text art",
    "ascii text",
    "ascii art creator",
    "text to ascii art",
    "ascii banner",
  ],
  authors: [{ name: "ascii-art" }],
  openGraph: {
    title: "ASCII Art Generator - Create Text Art Online",
    description:
      "Free online tool to convert text into ASCII art banners, create text boxes, and browse decorations. Copy and paste instantly.",
    url: "https://ascii-art-five.vercel.app",
    siteName: "ascii-art",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCII Art Generator - Create Text Art Online",
    description:
      "Free online tool to convert text into ASCII art banners, create text boxes, and browse decorations. Copy and paste instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ascii-art-five.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ASCII Art Generator",
              description:
                "Free online ASCII art generator. Convert text to large ASCII banner art, create text boxes, and browse pre-made decorations.",
              url: "https://ascii-art-five.vercel.app",
              applicationCategory: "DesignApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Text to ASCII art banner conversion",
                "Multiple font character styles",
                "ASCII box generator",
                "Pre-made decorations and dividers",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
