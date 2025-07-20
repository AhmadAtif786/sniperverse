import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ReduxProvider } from "@/store/provider";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SniperVerse - AI-Powered NFT Sniper Bot",
  description: "Get faster, smarter, earlier entries with SniperVerse. AI-powered NFT sniper bot with auto-buy engine, rug scoring, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <AuthProvider>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              toastClassName="bg-[#0a0a18] border border-blue-900/50"
              bodyClassName="text-white"
            />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
