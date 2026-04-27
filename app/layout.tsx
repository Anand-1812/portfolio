import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/Navbar/SmallScreenNav";
import { ThemeProvider } from "next-themes";

const BASE_URL = "https://anand-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Anand Kumar | Full Stack Developer",
    template: "%s | Anand Kumar",
  },
  description:
    "Full Stack Developer and 3rd-year CS student at KIIT-DU. I build React, Next.js, and Node.js applications — and solve 400+ DSA problems in C++. Open to SWE internships.",
  keywords: [
    "Anand Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "KIIT",
    "Portfolio",
    "SWE Intern",
    "Web Developer India",
  ],
  authors: [{ name: "Anand Kumar", url: "https://github.com/Anand-1812" }],
  creator: "Anand Kumar",
  publisher: "Anand Kumar",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Anand Kumar — Portfolio",
    title: "Anand Kumar | Full Stack Developer",
    description:
      "Full Stack Developer and 3rd-year CS student at KIIT-DU. Building with React, Next.js, and Node.js. Open to SWE internships.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anand Kumar — Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anand Kumar | Full Stack Developer",
    description:
      "Full Stack Developer and 3rd-year CS student at KIIT-DU. Building with React, Next.js, and Node.js. Open to SWE internships.",
    images: ["/og-image.png"],
    creator: "@anand_1812",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="theme-shell antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* ThemeChrome removed from here to move it inside the page content container */}
          <main className="relative z-10">{children}</main>
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}