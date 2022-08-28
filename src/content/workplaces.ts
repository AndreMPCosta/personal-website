import { GroupElement } from 'src/models/GroupElement';

const workPlaces: GroupElement[] = [
  {
    label: 'TekPrivacy',
    content: {
      title: 'Engineer',
      companyURL: new URL('https://tekprivacy.pt/'),
      date: 'March 2022 — Present',
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
      ],
    },
  },
  {
    label: 'Valmedis',
    content: {
      title: 'Engineer',
      companyURL: new URL('https://valmedis.pt/'),
      date: 'March 2022 - Present',
      info: [
        'Be part of the team responsible for data privacy solutions, being a full stack developer',
        'Work with a variety of different languages, and frameworks such as JavaScript, TypeScript, Python, React, Next, FastApi',
        'Develop new features, working closely with the data science team',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'Python',
        'React',
        'NextJS',
        'FastApi',
      ],
    },
  },
];

export default workPlaces;
