import { isRtlLang } from 'rtl-detect';
import { useLocale } from 'next-intl';

export default function useTextDirection(locale: any) {
  const defaultLocale = useLocale();
  if (!locale) locale = defaultLocale;
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}
