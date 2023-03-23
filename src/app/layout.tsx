import "./globals.css";

export const metadata = {
  title: "Union Survey",
  description: "A survey app built for any worker union",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
