import { footerExplore, footerLocations, footerServices, nav, site } from "@/content/site";

export function getNav(locale: string) {
  const labels: Record<string, string> | null =
    locale === "ar"
      ? {
          "/": "الرئيسية",
          "/services": "الخدمات",
          "/industries": "القطاعات",
          "/locations": "المواقع",
          "/blog": "المدونة",
          "/projects": "المشاريع",
          "/about": "من نحن",
          "/contact": "تواصل معنا",
        }
      : null;
  return nav.map((item) => ({
    ...item,
    label: labels?.[item.href] ?? item.label,
  }));
}

export function getFooterExplore(locale: string) {
  const labels: Record<string, string> | null =
    locale === "ar"
      ? {
          "/services": "الخدمات",
          "/industries": "القطاعات",
          "/locations": "المواقع",
          "/projects": "المشاريع",
          "/blog": "المدونة",
          "/faq": "الأسئلة الشائعة",
          "/about": "من نحن",
          "/contact": "تواصل معنا",
        }
      : null;
  return footerExplore.map((item) => ({
    ...item,
    label: labels?.[item.href] ?? item.label,
  }));
}

export function getFooterServices(locale: string) {
  const labels: Record<string, string> | null =
    locale === "ar"
      ? {
          "/services/event-management-oman": "إدارة الفعاليات",
          "/services/corporate-events-oman": "الفعاليات المؤسسية",
          "/services/exhibition-stand-design-oman": "تصميم أجنحة المعارض",
          "/services/exhibition-stand-construction-oman": "تنفيذ أجنحة المعارض",
          "/services/event-production-oman": "إنتاج الفعاليات",
          "/services/event-branding-oman": "هوية الفعالية",
          "/services/audio-visual-oman": "الصوتيات والمرئيات",
          "/services/event-staffing-oman": "فريق الفعالية",
        }
      : null;
  return footerServices.map((item) => ({
    ...item,
    label: labels?.[item.href] ?? item.label,
  }));
}

export function getFooterLocations(locale: string) {
  const labels: Record<string, string> | null =
    locale === "ar"
      ? {
          "/locations/muscat": "مسقط",
          "/locations/salalah": "صلالة",
          "/locations/sohar": "صحار",
          "/locations/nizwa": "نزوى",
          "/locations/sur": "صور",
          "/locations/duqm": "الدقم",
          "/locations/khasab": "خصب",
        }
      : null;
  return footerLocations.map((item) => ({
    ...item,
    label: labels?.[item.href] ?? item.label,
  }));
}

export function getSiteDescription(locale: string) {
  return locale === "ar"
    ? "تتولى Vulture Events Oman تخطيط وإنتاج المؤتمرات والمعارض والمراسم وبرامج الضيافة في سلطنة عُمان، من مركز تشغيلي في مسقط."
    : site.description;
}
