import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/providers/session-provider";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  title: "CivicConnect Social",
  description: "Modern Social Networking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
  <NavbarWrapper />
  {children}
</AuthProvider>
      </body>
    </html>
  );
}