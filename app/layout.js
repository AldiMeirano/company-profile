import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContactPage from "./components/Contact/ContactPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rano Group",
  description: "Mudah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ContactPage />
      </body>
    </html>
  );
}
