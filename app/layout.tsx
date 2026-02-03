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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="min-h-screen">
          {/* Navigation Bar */}
          <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-600">Software Engineer</h1>
              <div className="flex gap-6">
                <a href="#about" className="hover:text-blue-600 transition">About</a>
                <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
                <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
                <a href="#education" className="hover:text-blue-600 transition">Education</a>
                <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
              </div>
            </div>
          </nav>
          
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p>© {new Date().getFullYear()} Software Engineer Resume</p>
              <p className="text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}