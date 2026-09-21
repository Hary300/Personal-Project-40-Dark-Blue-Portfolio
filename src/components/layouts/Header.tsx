import { headerData } from '@/data/headerData';
import Logo from '../shared/Logo';
import { Button } from '../ui/button';
import MobileNav from '../shared/MobileNav';

const Header = () => {
  const navLinks = headerData.navLinks;
  const ctaButton = headerData.ctaButton;
  return (
    <header className='flex justify-between items-center px-4 sm:px-10 lg:px-15 xl:px-30 h-16'>
      <Logo />
      <MobileNav />
      <nav className='hidden lg:block'>
        <ul className='flex gap-3'>
          {navLinks.map((link) => (
            <li key={link.id} className='px-4'>
              <a
                href={link.href}
                className='hover:underline cursor-pointer hover:text-primary-300'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button asChild className='hidden lg:flex w-full lg:max-w-49.25'>
        <a href={ctaButton.href}>{ctaButton.label}</a>
      </Button>
    </header>
  );
};

export default Header;
