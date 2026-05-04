import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.06),transparent_40%)]" />
        </div>

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}