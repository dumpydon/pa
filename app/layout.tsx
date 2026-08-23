import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const description =
  "Software Engineer building evidence-grounded incident tooling, algorithm visualizations, and LeetCode practice intelligence.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://piyushagarwal.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Piyush Agarwal — Software Engineer",
  description,
  applicationName: "Piyush Agarwal Portfolio",
  authors: [{ name: "Piyush Agarwal", url: "https://github.com/dumpydon" }],
  keywords: [
    "Piyush Agarwal",
    "Software Engineer",
    "TraceLens",
    "PathForge",
    "LeetVis",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Piyush Agarwal — Software Engineer",
    description,
    type: "website",
    siteName: "Piyush Agarwal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Agarwal — Software Engineer",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7fa" },
  ],
};

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem('pa-theme');
      const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    } catch (_) {
      document.documentElement.dataset.theme = 'dark';
    }
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        {children}
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </body>
    </html>
  );
}
