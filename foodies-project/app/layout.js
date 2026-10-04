import Header from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "All Meals",
  description: "Brows the delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
