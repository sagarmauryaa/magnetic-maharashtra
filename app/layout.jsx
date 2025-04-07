import localFont from "next/font/local";
import "./globals.css";
import StickyNavbar from "./components/common/StickyNavbar";
import Footer from "./components/common/Footer";
import SmoothScroll from "./components/common/SmoothScroll";
import { AppProvider } from "./components/AppContext";

const ppNeuMontrealRegular = localFont({
  src: "./fonts/PPNeueMontreal-Regular.woff2",
  variable: "--font-ppneumontreal-regular",
  weight: "100 900",
});

export const metadata = {
  title: "Magnetic Maharashtra",
  description: "Magnetic Maharashtra is a Event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ppNeuMontrealRegular.variable}`}>
        <AppProvider>
          <StickyNavbar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
