import { Metadata } from "next";
import { Roboto, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Import Roboto font
const roboto = Roboto({
  variable: "--font-roboto", // Custom CSS variable
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const garamondDisplay = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-garamond-display", // Custom CSS variable name
});

export const metadata: Metadata = {
  title: "Luxury Private Jet Charter | Oppong Private Jet | Global Services",
  description:
    "Experience premium private aviation with Oppong Private Jet. Book bespoke jet charters, empty legs, and aircraft management services. 24/7 VIP support.",
  keywords: [
    "private jet charter",
    "luxury air travel",
    "business jets",
    "VIP flights",
    "aircraft rental",
  ],
  openGraph: {
    title: "Premium Private Jet Services | Oppong Private Jet",
    description:
      "World-class private aviation solutions with personalized service",
  },
  alternates: {
    canonical: "https://oppongjet.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${garamondDisplay.variable} antialiased`}
      >
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
