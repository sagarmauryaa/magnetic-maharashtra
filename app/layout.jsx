import localFont from "next/font/local";
import "./globals.css";
import StickyNavbar from "./components/common/StickyNavbar";
import Footer from "./components/common/Footer";
import SmoothScroll from "./components/common/SmoothScroll";
import { AppProvider } from "./components/AppContext";
import Helper from "@/helper";
import '@/styles/main.scss';
import AnimationOverlay from "./components/Home/AnimationOverlay";

const ppNeuMontrealRegular = localFont({
  src: "./fonts/PPNeueMontreal-Regular.woff2",
  variable: "--font-ppneumontreal-regular",
  weight: "100 900",
});

const ebGaramondItalic = localFont({
  src: "./fonts/EBGaramond-Italic.ttf",
  variable: "--font-ebgaramond-italic",
  weight: "100 900",
});

export const metadata = {
  title: "Magnetic Maharashtra",
  description: "Magnetic Maharashtra is a Event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ppNeuMontrealRegular.variable} ${ebGaramondItalic.variable}`}
      >
        <AnimationOverlay/>
        <AppProvider>
          <StickyNavbar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </AppProvider>
        <Helper />
      </body>
    </html>
  );
}
