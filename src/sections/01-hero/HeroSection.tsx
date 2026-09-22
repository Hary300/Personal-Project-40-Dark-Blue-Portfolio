import SectionWrapper from '@/components/layouts/SectionWrapper';
import { Button } from '@/components/ui/button';
import { heroData } from '@/data/01-heroData';

const HeroSection = () => {
  const title = heroData.text.title;
  const description = heroData.text.description;
  const ctaButton = heroData.ctaButton;
  return (
    <SectionWrapper sectionId='home'>
      <div className='flex flex-col gap-6 lg:gap-12'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold text-display-xl lg:text-display-2xl'>
            {title.prefix}{' '}
            <span className='text-primary-300'>{title.highlight}</span>{' '}
            {title.suffix}
          </h1>
          <p className='text-neutral-400 text-sm lg:text-md'>{description}</p>
        </div>
        <Button asChild className='hidden lg:flex w-full lg:max-w-49.25'>
          <a href={ctaButton.href}>{ctaButton.label}</a>
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
