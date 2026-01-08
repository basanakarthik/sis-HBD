import { Shantell_Sans } from "next/font/google";
import "./globals.css";

// Configure the Shantell Sans font
const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-shantell-sans", // A variable to use in CSS if needed
});

export const metadata = {
  title: "Happy Birthday!",
  description: "A special birthday countdown and celebration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the font class to the body tag */}
      <body className={shantellSans.className}>
        {children}
      </body>
    </html>
  );
}