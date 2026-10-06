import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hôtel Nefertiti Palace',
  description: 'Hôtel haut de gamme à Yopougon, Millionnaire, Abidjan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
