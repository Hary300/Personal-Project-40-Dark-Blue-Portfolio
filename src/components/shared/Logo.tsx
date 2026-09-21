import { headerData } from '@/data/headerData';

const Logo = () => {
  const logoData = headerData.logo;
  return (
    <a href={logoData.href} className='flex gap-2.25 items-center'>
      <div>
        <img src={logoData.src} alt={logoData.alt} className='w-6.5 lg:w-8' />
      </div>
      <span className='font-semibold text-[21px] lg:text-2xl'>
        {logoData.text}
      </span>
    </a>
  );
};

export default Logo;
