import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { industryData } from '@/data/06-industryData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const IndustrySection = () => {
  const header = industryData.header;
  const tabs = industryData.tabs;
  return (
    <SectionWrapper sectionId='industry' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <Tabs defaultValue={tabs[0].id} className='flex flex-col gap-6 lg:gap-17'>
        <TabsList
          variant='line'
          className='flex justify-between w-full overflow-auto gap-2 border-b'
        >
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className='pb-4'>
              {tab.trigger}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className='xl:px-28.5'>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className='flex flex-col gap-5 lg:gap-25 sm:flex-row sm:justify-between sm:items-center'>
                <div className='flex flex-col gap-6 ms:gap-12'>
                  <div className='flex flex-col gap-3 lg:gap-4'>
                    <h3 className='text-display-xs lg:text-display-xl font-bold'>
                      {tab.title}
                    </h3>
                    <p className='text-neutral-400 text-sm lg:text-md'>
                      {tab.description}
                    </p>
                  </div>
                  <Button className='sm:max-w-49.25'>Detail</Button>
                </div>
                <div className='overflow-hidden rounded-2xl w-full sm:max-w-90'>
                  <img
                    src={tab.srcImg}
                    alt={tab.altText}
                    className='size-full object-cover'
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </SectionWrapper>
  );
};

export default IndustrySection;
