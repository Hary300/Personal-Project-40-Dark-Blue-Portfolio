import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { headerData } from '@/data/headerData';

const MobileNav = () => {
  const navLinks = headerData.navLinks;
  const ctaButton = headerData.ctaButton;
  return (
    <div className='lg:hidden flex items-center'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className='px-0 h-auto rounded-0'>
            <FiMenu className='size-6' />
          </Button>
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <div className='flex flex-col gap-3 p-4'>
            <SheetClose asChild>
              <div className='flex justify-end'>
                <RxCross2 className='size-6' />
              </div>
            </SheetClose>
            <nav>
              <ul className='flex flex-col gap-3'>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <SheetClose asChild>
                      <a href={link.href}>{link.label}</a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <SheetClose asChild>
              <Button asChild className='flex w-full lg:max-w-49.25'>
                <a href={ctaButton.href}>{ctaButton.label}</a>
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
