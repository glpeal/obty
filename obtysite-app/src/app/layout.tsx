import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "obty — Neural Network",
  description: "Нейросеть нового поколения",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
