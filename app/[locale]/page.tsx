import { getTranslator } from 'next-intl/server';
const Page = async ({ params: { locale } }: any) => {
  const t = await getTranslator(locale, 'index');
  return <h1>{t('title')}</h1>;
};

export default Page;
