import Link from 'next/dist/client/link';
import { useTranslations } from 'next-intl';
const Navigation = () => {
  const t = useTranslations('navigation');

  const createLink = ({ href, text }: { href: string; text: string }) => {
    return (
      <Link
        className="px-5 py-2.5 rounded-md hover:bg-gray-500 hover:text-white  capitalize"
        href={href}
      >
        {text}
      </Link>
    );
  };
  return (
    <section className="flex flex-row gap-5">
      {createLink({ href: '/', text: t('home') })}
      {createLink({ href: '/', text: t('about') })}
    </section>
  );
};

export default Navigation;
