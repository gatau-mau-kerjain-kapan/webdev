"use client";

import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@material-tailwind/react"
import { ThemeProvider } from "next-themes";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: "Beanmaster",
//   description: "Beanmaster.vercel.app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
        .montserrat {
          font-family: var(--font-montserrat);
        }

        .poppins {
          font-family: var(--font-poppins);
        }
      `}</style>
      <body className={poppins.className}>
      <AuthContextProvider>
      <ThemeProvider attribute="class">
      <Navbar/>
        {children}
      <Footer/>
      </ThemeProvider>
      </AuthContextProvider>
      </body>
    </html>
  );
}
