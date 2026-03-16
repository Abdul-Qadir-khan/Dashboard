// app/layout.tsx or app/layout.jsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Sidebar from '@/components/layout/sidebar';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // optional weights you need
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yumzy Dashboard",
  description: "Yumzy dashboard for cotrolling all balance sheet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <div className="flex">
          <Sidebar />
          <main className="md:w-full w-100 md:max-w-500 mx-auto">
            <Header />
            {children}

            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
