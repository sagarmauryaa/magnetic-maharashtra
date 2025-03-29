import localFont from "next/font/local";
import "./globals.css";
import StickyNavbar from "./components/common/StickyNavbar";
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
      <StickyNavbar />
      <body className={`${ppNeuMontrealRegular.variable}`}>{children}</body>
    </html>
  );
}
