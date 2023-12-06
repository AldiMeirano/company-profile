import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContactPage from "./components/Contact/ContactPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rano Group ",
  description:
    "Jelajahi solusi distribusi unggul dari Rano Group, perusahaan terkemuka yang mendedikasikan diri untuk memberikan layanan distribusi berkualitas tinggi. Dengan inovasi sebagai inti bisnis, kami membangun jaringan yang tangguh, memberikan efisiensi maksimal, dan memenuhi kebutuhan klien. Bergabunglah dengan Rano Group dan rasakan perbedaan distribusi yang didukung oleh teknologi canggih dan komitmen terhadap kepuasan pelanggan.",
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
