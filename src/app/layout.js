import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";
import { ReduxProvider } from "./redux-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "profile.fyi | Dining",
  description: "premium dining experience by profile.fyi",
};

export default function RootLayout({ children }) {
  return (
    <html  className="dark" lang="en">
      <ReduxProvider><body className={inter.className}><Navbar/>{children}<NavbarMobile/></body></ReduxProvider>
    </html>
  );
}
