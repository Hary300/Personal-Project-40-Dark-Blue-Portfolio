import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/07-projectData';

const ProjectSection = () => {
  const header = projectsData.header;
  const projects = projectsData.projects;
  return (
    <SectionWrapper sectionId='projects' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='flex flex-wrap gap-6 lg:gap-5'>
        {projects.map((project) => (
          <div key={project.id} className='sm:flex-1 flex flex-col gap-4'>
            <div className='rounded-2xl overflow-hidden'>
              <img src={project.srcImg} alt={project.altText} />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-lg'>{project.title}</h3>
              <p className='text-neutral-400 text-md'>{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
