import upworkImg from '@/assets/images/company/upwork.png';
import netflixImg from '@/assets/images/company/netflix.png';
import zoomImg from '@/assets/images/company/zoom.png';
import postmanImg from '@/assets/images/company/postman.png';
import databricksImg from '@/assets/images/company/databricks.png';
import airbnbImg from '@/assets/images/company/airbnb.png';
import dropboxImg from '@/assets/images/company/dropbox.png';
import paypalImg from '@/assets/images/company/paypal.png';
import adobeImg from '@/assets/images/company/adobe.png';

interface CompanyLogo {
  id: string;
  name: string;
  srcImg: string;
  altText: string;
}

interface TrustedSectionData {
  title: string;
  companies: CompanyLogo[];
}

export const trustedData: TrustedSectionData = {
  title: 'Trusted by Leading Companies Worldwide',
  companies: [
    {
      id: 'upwork',
      name: 'Upwork',
      srcImg: upworkImg,
      altText: 'Upwork Logo',
    },
    {
      id: 'zoom',
      name: 'Zoom',
      srcImg: zoomImg,
      altText: 'Zoom Logo',
    },
    {
      id: 'postman',
      name: 'Postman',
      srcImg: postmanImg,
      altText: 'Postman Logo',
    },
    {
      id: 'databrick',
      name: 'Databricks',
      srcImg: databricksImg,
      altText: 'Databricks Logo',
    },
    {
      id: 'airbnb',
      name: 'Airbnb',
      srcImg: airbnbImg,
      altText: 'Airbnb Logo',
    },
    {
      id: 'dropbox',
      name: 'Dropbox',
      srcImg: dropboxImg,
      altText: 'Dropbox Logo',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      srcImg: paypalImg,
      altText: 'PayPal Logo',
    },
    {
      id: 'adobe',
      name: 'Adobe',
      srcImg: adobeImg,
      altText: 'Adobe Logo',
    },
    {
      id: 'netflix',
      name: 'Netflix',
      srcImg: netflixImg,
      altText: 'Netflix Logo',
    },
  ],
};
