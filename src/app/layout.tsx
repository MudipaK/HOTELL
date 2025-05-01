import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sangria Grand Hotel - Luxury Hotel & Wedding Venue in Middeniya",
  description: "Experience luxury at Sangria Grand Hotel. Offering premium wedding halls, catering services, luxury rooms, and fine dining in Middeniya, Sri Lanka.",
  keywords: "hotel, wedding venue, luxury rooms, catering, restaurant, Middeniya, Sri Lanka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
