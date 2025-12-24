import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/whattapp/WhatsAppButton";

export const metadata = {
  title: {
    default: "Vimarsha Invotech | Deep Insight Meets Digital Innovation",
    template: "%s | Vimarsha Invotech",
  },
  description:
    "Vimarsha Invotech builds scalable full-stack and AI-driven solutions for MSMEs and startups.",
  metadataBase: new URL("https://vimarsha-invotech.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Vimarsha Invotech",
    url: "https://vimarsha-invotech.vercel.app",
  },
  verification: {
    google: "google655f554a553e3a93.html",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vimarsha Invotech",
              url: "https://vimarsha-invotech.vercel.app",
              description:
                "AI and full-stack software company providing scalable digital solutions.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />

        <Navbar />
        <main className="min-h-screen">{children}
          <WhatsAppButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
