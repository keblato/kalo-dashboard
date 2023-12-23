import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";

const locales = ["en", "es"];
export const metadata = {
  title: "Kalo",
};
export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  console.log(locale);

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
