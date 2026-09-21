import Logo from '../shared/Logo';

const Header = () => {
  return (
    <header className='flex justify-between px-4 sm:px-10 lg:px-15 xl:px-30 h-16'>
      <Logo />
    </header>
  );
};

export default Header;
