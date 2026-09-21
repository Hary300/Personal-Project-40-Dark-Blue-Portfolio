import { footerData } from '@/data/footerData';
import Logo from '../shared/Logo';

const Footer = () => {
  const socials = footerData.socials;
  return (
    <footer className='flex flex-col gap-6 md:flex-row md:justify-between md:items-center px-4 sm:px-10 lg:px-15 xl:px-30 py-10'>
      <div className='flex flex-col gap-6'>
        <Logo />
        <p className='text-xs lg:text-sm text-neutral-400'>
          {footerData.copyright}
        </p>
      </div>
      <div className='flex gap-4'>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center size-10 rounded-full shrink-0 border'
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
