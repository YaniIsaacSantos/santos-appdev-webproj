import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yani Isaac U. Santos | Computer Science Student",
  description: "Portfolio and resume of Yani Isaac U. Santos, 2nd year Computer Science student at Ateneo de Davao University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorPalette = {
    primary: "#0A192F",
    secondary: "#112240",
    accent: "#64FFDA",
    textPrimary: "#CCD6F6",
    textSecondary: "#8892B0",
    cardBorder: "#233554"
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body 
        className={`${inter.className}`}
        style={{ 
          backgroundColor: colorPalette.primary,
          color: colorPalette.textPrimary 
        }}
      >
        {/* Optional: Add a simple fixed navigation if needed */}
        <nav 
          className="sticky top-0 z-50 py-3 px-4 border-b"
          style={{ 
            backgroundColor: colorPalette.primary,
            borderColor: colorPalette.cardBorder
          }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold" style={{ color: colorPalette.accent }}>
              Software Engineer
            </h1>
            <div className="flex gap-6">
              <a 
                href="#about" 
                className="hover:text-accent transition-colors duration-300"
                style={{ color: colorPalette.textSecondary }}
              >
                Ateneo De Davao University
              </a>
            </div>
          </div>
        </nav> 
        
        <main>
          {children}
        </main>
        
        {/* Optional: Add a simple footer if needed */}
         <footer 
          className="py-6 mt-12 border-t"
          style={{ 
            backgroundColor: colorPalette.primary,
            borderColor: colorPalette.cardBorder
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm" style={{ color: colorPalette.textSecondary }}>
              © {new Date().getFullYear()} Yani Isaac U. Santos. All rights reserved.
            </p>
            <p className="text-xs mt-2" style={{ color: colorPalette.textSecondary + '80' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </footer> 
      </body>
    </html>
  );
}