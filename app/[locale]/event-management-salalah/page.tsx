import { hireMetadata, HireCityPage } from "@/components/HireCityPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return hireMetadata(locale, "eventManagementSalalah");
}

export default function Page({ params }: Props) {
  return <HireCityPage params={params} pageKey="eventManagementSalalah" />;
}
