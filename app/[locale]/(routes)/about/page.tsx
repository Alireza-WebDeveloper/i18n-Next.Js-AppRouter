import { getTranslator } from 'next-intl/server';

// MetaData With I18N
export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, 'index');

  return {
    title: t('title'),
  };
}

const Page = () => {
  return <div> </div>;
};

export default Page;
