import "./globals.css";
import { Navbar } from "./components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <body >{children}</body>
    </html>
  );
}
