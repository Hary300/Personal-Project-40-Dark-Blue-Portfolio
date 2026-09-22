import { headerData } from '@/data/headerData';
import Logo from '../shared/Logo';
import { Button } from '../ui/button';
import MobileNav from '../shared/MobileNav';
import { useEffect, useState } from 'react';
import { cn } from 'cn';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = headerData.navLinks;
  const ctaButton = headerData.ctaButton;
  return (
    <header
      className={cn(
        'fixed max-w-360 mx-auto w-full flex justify-between items-center px-4 sm:px-10 lg:px-15 xl:px-30 h-16 z-50',
        isScroll && 'backdrop-blur-2xl'
      )}
    >
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
