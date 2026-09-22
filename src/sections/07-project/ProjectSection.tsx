import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/07-projectData';

const ProjectSection = () => {
  const header = projectsData.header;
  return (
    <SectionWrapper sectionId='projects' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default ProjectSection;
