import SectionWrapper from '@/components/layouts/SectionWrapper';
import { Button } from '@/components/ui/button';
import { heroData } from '@/data/01-heroData';
import SkewMotion from '@/motion/SkewMotion';
import { cn } from 'cn';

const HeroSection = () => {
  const title = heroData.text.title;
  const description = heroData.text.description;
  const ctaButton = heroData.ctaButton;
  const heroImg = heroData.heroImg;
  const cards = heroData.cards;
  return (
    <SectionWrapper
      sectionId='home'
      className='flex flex-wrap pt-28 lg:pt-36.75 items-center gap-7 lg:gap-10'
    >
      <div className='flex-[5.3] basis-80 flex flex-col gap-6 lg:gap-12 '>
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

      <div
        className='flex-[4.7] basis-80 relative flex justify-center'
        style={{ height: 'clamp(21.25rem, 52.78vw, 39.85rem)' }}
      >
        <SkewMotion asChild>
          <img
            src={heroImg.srcImg}
            alt={heroImg.altText}
            className='object-contain'
          />
        </SkewMotion>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <SkewMotion asChild key={card.id}>
              <div
                className={cn(
                  'p-px rounded-md bg-linear-to-b from-[#0093DD] to-transparent absolute ',
                  card.position
                )}
              >
                <div className='flex flex-col gap-1 lg:gap-2 bg-neutral-900 rounded-md p-2.25 lg:p-4 w-[clamp(6.399rem,13.333vw,12rem)]'>
                  <div className='flex justify-center items-center size-5.25 lg:size-10 shrink-0 rounded-full bg-primary-300 shadow-[0_0_32.2px_rgba(0,147,221,0.6)]'>
                    <Icon className='size-[11.75px] lg:size-5.5' />
                  </div>
                  <h3 className='font-semibold text-[clamp(0.467rem,0.972vw,0.875rem)]'>
                    {card.title}
                  </h3>
                  <p className='text-neutral-400 text-[clamp(0.467rem,0.972vw,0.875rem)]'>
                    {card.description}
                  </p>
                </div>
              </div>
            </SkewMotion>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
