import "./globals.css";
import { Metadata } from "next";
import Providers from "./components/Themeprovider";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Themechanger from "./components/Themechanger";

export const metadata: Metadata = {
  title: "Synctree | Free Linktree Killer",
  description: "Created Manually",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <div className="overflow-x-hidden min-h-screen bg-[#F3F3F1] text-[#030301] dark:bg-[#030301] dark:text-[#F3F3F1]">
            <Header />
            <Themechanger />
            {children}
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
