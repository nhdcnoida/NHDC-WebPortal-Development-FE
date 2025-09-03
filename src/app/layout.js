import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ExternalLinkWarning from "@/components/ExternalLinkWarning";
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// ...the rest of your layout.js or _app.js file
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ExternalLinkWarning/>
        {children}
      </body>
    </html>
  );
}
