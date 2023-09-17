import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="bg-gray-100 flex justify-between p-2 items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
