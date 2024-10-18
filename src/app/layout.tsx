import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "../app/styles/globals.css";
import "../app/styles/embla.css";

// Use only ProtestRiot-Regular font
const protestRiot = localFont({
  src: "./fonts/ProtestRiot-Regular.ttf",
  variable: "--font-protest-riot",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SmilePath - Gamification for Dental Education",
  description:
    "SmilePath is a platform designed to revolutionize dental education through gamification. Engage with interactive learning experiences, track your progress, and earn rewards while mastering the field of odontologia.",
  keywords:
    "SmilePath, odontologia, dental education, gamification, learning, interactive education, dentistry, rewards, progress tracking, student engagement",
  authors: [{ name: "SmilePath Team", url: "https://SmilePath.com" }],
  openGraph: {
    title: "SmilePath - Gamification for Dental Education",
    description:
      "Explore a new way to learn dentistry with SmilePath. Gamified lessons, progress tracking, and rewards make learning fun and effective.",
    url: "https://SmilePath.com",
    images: [
      {
        url: "https://SmilePath.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "SmilePath Dental Education Platform",
      },
    ],
    siteName: "SmilePath",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${protestRiot.variable} antialiased`}>
        <div className="h-screen">
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4 ml-64">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
