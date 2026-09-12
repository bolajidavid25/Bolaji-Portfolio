import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CustomCursor } from "@/components/cursor";
import { MatterCanvas } from "@/components/matter-canvas";
import { profile } from "@/data/profile";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bolajidavid.dev";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Bolaji David is a Mobile & Web Application Developer from Ibadan, Nigeria. Building high-performance cross-platform apps with Flutter, React Native, Next.js, and Firebase.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Bolaji David", "Flutter Developer", "React Native Developer",
    "Next.js Developer", "Mobile App Developer", "Web Developer",
    "Cross-Platform Developer", "Nigeria Developer", "Ibadan Developer",
    "Firebase Developer", "React Developer", "Software Engineer Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: "Cross-platform mobile & web application developer building polished Flutter, React Native, and Next.js apps.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: "Cross-platform mobile & web application developer from Ibadan, Nigeria.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: "Freelance" },
  address: { "@type": "PostalAddress", addressLocality: "Ibadan", addressCountry: "NG" },
  email: `mailto:${profile.links.email}`,
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: ["Flutter", "React Native", "Next.js", "React", "Firebase", "Dart", "TypeScript", "JavaScript"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Custom cursor — hidden on touch devices via CSS */}
        <CustomCursor />

        {/* Matter.js gravity shapes in the page margins */}
        <MatterCanvas />

        <div className="relative z-10 min-h-dvh" style={{ background: "rgb(var(--bg))" }}>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
