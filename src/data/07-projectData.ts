import companyProfileImg from '@/assets/images/projects/companyProfile.webp';
import portfolioImg from '@/assets/images/projects/portfolio.webp';
import blogWebsiteImg from '@/assets/images/projects/blogWebsite.webp';
import type { SectionHeader } from '@/types/SectionHeader';

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  srcImg: string;
  altText: string;
}

interface ProjectsSectionData {
  header: SectionHeader;
  projects: ProjectItem[];
}

export const projectsData: ProjectsSectionData = {
  header: {
    title: 'Transforming Ideas into Digital Excellence',
    subtitle:
      "Explore our past projects and see how we've helped businesses grow with innovative IT solutions",
  },
  projects: [
    {
      id: 'company-profile',
      title: 'Company Profile',
      year: '2025',
      srcImg: companyProfileImg,
      altText: 'Company Profile Website Project Preview',
    },
    {
      id: 'portfolio',
      title: 'Portofolio',
      year: '2025',
      srcImg: portfolioImg,
      altText: 'Personal Portfolio Website Project Preview',
    },
    {
      id: 'blog-website',
      title: 'Blog Website',
      year: '2025',
      srcImg: blogWebsiteImg,
      altText: 'Blog Website Project Preview',
    },
  ],
};
