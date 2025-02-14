import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import "@stream-io/video-react-sdk/dist/css/styles.css"
import 'react-datepicker/dist/react-datepicker.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VOOM",
  description: "Video Conferencing App",
  icons:{
    icon: "/icons/voom-logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/voom-logo.png",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#41B06E",
          colorBackground: "#151515",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }}>
      <body className={`${inter.className} bg-dark-2`}>
        {children}
        <Toaster />

      </body>
      </ClerkProvider>
      
    </html>
  );
}
