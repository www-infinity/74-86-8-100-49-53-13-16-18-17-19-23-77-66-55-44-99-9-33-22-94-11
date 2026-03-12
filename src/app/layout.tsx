import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ElementLab — Advanced Material Science Prototyping',
  description:
    'Prototype next-generation advanced materials: high-entropy alloys, functionally graded materials, radiation-shielding composites, and smart bio-implants. Powered by combinatorial AI and digital twin technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0f1e] text-white min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
