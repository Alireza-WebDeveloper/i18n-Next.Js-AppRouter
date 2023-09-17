import * as Icons from 'react-icons/si';
import Link from 'next/dist/client/link';
const Logo = () => {
  return (
    <Link href="/">
      <Icons.SiNextdotjs size="2rem" />
    </Link>
  );
};

export default Logo;
