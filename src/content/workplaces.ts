import { GroupElement } from 'src/models/GroupElement';

const workPlaces: GroupElement[] = [
  {
    label: 'Occam',
    content: {
      title: 'Senior Backend Engineer',
      companyURL: new URL('https://occam-atlas.ai/'),
      date: 'September 2023 — Present',
      info: [],
      technologies: [
        'Python',
        'FastApi',
        'MongoDB',
        'vue',
      ],
    }
  },
  {
    label: 'TekPrivacy',
    content: {
      title: 'Engineer',
      companyURL: new URL('https://tekprivacy.pt/'),
      date: 'March 2022 — September 2023',
      info: [
        'Be part of the team responsible for data privacy solutions, being a full stack developer',
        'Develop new features, working closely with the data science team',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'Python',
        'React',
        'NextJS',
        'FastApi',
        'MongoDB',
      ],
    },
  },
  {
    label: 'Valmedis',
    content: {
      title: 'Web Developer',
      companyURL: new URL('https://valmedis.pt/'),
      date: 'June 2020 - March 2022',
      info: [
        "Solo Web Developer, responsible for the company's website",
        'Develop internal tools to automate processes, using Web Scraping (BeautifulSoup) and Selenium',
      ],
      technologies: ['Python', 'Flask', 'Selenium', 'Javascript', 'PostgreSQL'],
    },
  },
  {
    label: 'Freelancer',
    content: {
      title: 'Web Developer',
      companyURL: new URL('https://celfocus.pt/'),
      date: 'November 2018 - June 2020',
      info: [
        'Worked in different projects as a Freelancer',
        'Python was used as the main tool for the development',
      ],
      technologies: [
        'Python',
        'Flask',
        'FastApi',
        'Javascript',
        'MongoDB',
        'PostgreSQL',
      ],
    },
  },
  {
    label: 'Celfocus',
    content: {
      title: 'Managed Services',
      companyURL: new URL('https://celfocus.pt/'),
      date: 'February 2018 - November 2018',
      info: [
        'Support for Vodafone IoT project (Internet in the Car)',
        'Aiding on a monitoring solution using Zabbix',
      ],
      technologies: ['Oracle', 'Python', 'Zabbix'],
    },
  },
  {
    label: 'Accenture',
    content: {
      title: 'Application Development Associate',
      companyURL: new URL('https://accenture.pt/'),
      date: 'January 2017 - February 2018',
      info: [
        'Development of an IoT solution, connecting Amazon Echo (AI) within the project using AWS Lambda',
        'Augmented reality solution for Microsoft Hololens',
        'Back End development, for an Health Company',
      ],
      technologies: ['Java', 'Python', 'C#', 'Javascript', 'SAP'],
    },
  },
];

export default workPlaces;
