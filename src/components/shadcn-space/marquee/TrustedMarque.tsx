import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { trustedData } from '@/data/02-trustedData';

export default function TrustedMarque() {
  const companies = trustedData.companies;

  return (
    <>
      <Marquee className='[--duration:20s] px-0 py-0 lg:py-9' pauseOnHover>
        {companies.map((company, index) => (
          <div key={index} className='py-10'>
            <img
              src={company.srcImg}
              alt={company.altText}
              className='mr-8 h-12 dark:hidden grayscale'
            />
          </div>
        ))}
      </Marquee>
    </>
  );
}
