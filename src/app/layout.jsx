import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "AnimeI",
  description: "AnimeI - The Anime Recommendation Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar title={"AnimeI"} />
        {children}
      </body>
    </html>
  );
}
