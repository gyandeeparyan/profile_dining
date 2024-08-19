import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

import { ReduxProvider } from "./redux-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile.fyi | Dining",
  generator: "Gyandeep Aryan",
  manifest: "/manifest.json",
  keywords: ["swiggyapi", "gyandeep aryan", "profile.fyi", "dining"],
  description: "premium dining experience by profile.fyi",

};

export default function RootLayout({ children }) {
  return (
    <html  className="dark" lang="en">
      <head>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <ReduxProvider><body className={`${inter.className} bg-rose-100 dark:bg-mainDark`}><Navbar/>{children}<NavbarMobile/></body></ReduxProvider>
    </html>
  );
}
