import Navigation from "./components/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Turismo Barracão",
  description: "Prefeitura de Barracão PR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
