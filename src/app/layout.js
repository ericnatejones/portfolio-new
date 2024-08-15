import { Inter } from "next/font/google";
import Navbar from '../components/Navbar'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eric Jones Portfolio",
  description: "Develop with me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          <main>{children}</main>
          </div>
        </body>
    </html>
  );
}
