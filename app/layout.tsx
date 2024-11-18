import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "K.C.T Engineering College",
  description: "kct engineering college official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar></NavBar>
        {children}
        <Footer />
      </body>
    </html>
  );
}


/*

/about
/admissions
/blogs
/contact-us
/gallery
/lectures
/placement
/allied-science-humanities
/civil-engineering
/computer-science-and-engineering
/electronics-and-communication-engineering
/mechanical-engineering
/aicte-approvals
/cicc-committee-and-sgrc
/mandatory-disclosure
/obc-sc-st-cell
/sexual-harassment-cell
*/