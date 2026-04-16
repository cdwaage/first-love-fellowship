import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to First Love Fellowship. We would love to hear from you.",
  openGraph: {
    title: "Contact | First Love Fellowship",
    description:
      "Reach out to First Love Fellowship. We would love to hear from you.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
