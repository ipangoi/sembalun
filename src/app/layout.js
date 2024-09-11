import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desa Wisata Sembalun",
  description: "Website Informasi Desa Wisata Sembalun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png"></link>
      <body className={inter.className}>
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
        </main>
         <Footer/>
        {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script> */}
         {/* <!-- scroll reveal --> */}
         <script src="https://unpkg.com/scrollreveal"></script>
      </body>
    </html>
  );
}
