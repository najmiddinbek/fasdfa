import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Document",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="qora_element">
          <Navbar />
          <div className="container">
            <div className="mt-8">{children}</div>
          </div>
        </div>
        <ToastContainer />
      </body>
    </html >
  );
}
