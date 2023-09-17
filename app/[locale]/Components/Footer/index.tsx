import Link from 'next/link';
import * as Icons from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-gray-100 w-full p-3">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-center">Social Networks</h1>
        <section className="flex flex-wrap justify-evenly">
          <Link href="">
            <Icons.BsInstagram size="1.4rem" />
          </Link>
          <Link href="">
            <Icons.BsWhatsapp size="1.4rem" />
          </Link>
          <Link href="">
            <Icons.BsTelegram size="1.4rem" />
          </Link>
          <Link href="">
            <Icons.BsFacebook size="1.4rem" />
          </Link>
          <Link href="">
            <Icons.BsTwitter size="1.4rem" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Footer;
