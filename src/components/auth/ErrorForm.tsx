import { useTranslations } from "next-intl";

export function ErrorForm({ error }: { error: any }) {
  return <div className="bg-red-500 text-white p-2 mb-2">{error}</div>;
}
