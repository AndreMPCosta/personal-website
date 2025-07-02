import { Project } from 'src/models/Project';
import GymAppContent from 'components/projectSlots/GymAppContent.vue';
import MangalibeContent from 'components/projectSlots/MangalibeContent.vue';
import PadelCheckerContent from 'components/projectSlots/PadelCheckerContent.vue';

const projects: Project[] = [
  {
    imageSrc: '/projects/mangalibe.png',
    title: 'Mangalibe',
    subtitle: 'Acessories/Clothes Online Shop',
    stack: ['vue', 'quasar', 'mongodb', 'fastapi', 'Python'],
    github: 'https://github.com/AndreMPCosta/backend-ecommerce',
    // homepage: 'https://mangalibe.com',
    slot: MangalibeContent as InstanceType<typeof MangalibeContent>,
    backImages: [
      '/projects/mangalibe_showcase_resize.jpg',
      '/projects/mangalibe_showcase_2_resize.jpg',
    ],
  },
  {
    imageSrc: '/projects/padel_primary.png',
    title: 'Padel Checker',
    subtitle: 'Tool For Padel Players',
    stack: ['FastApi', 'MongoDB', 'Python'],
    github: 'https://github.com/AndreMPCosta/padel-checker-pub',
    // homepage: 'https://padel-checker.andrecosta.eu/docs',
    slot: PadelCheckerContent as InstanceType<typeof PadelCheckerContent>,
    backImages: ['/projects/padel_resized.png'],
  },
  {
    imageSrc: '/projects/gym.png',
    title: 'Gym App',
    subtitle: 'Mobile App for a Gymnasium',
    stack: ['Flask', 'Python', 'Kivy'],
    github: 'https://github.com/AndreMPCosta/PlayRestAPI',
    gitlab: 'https://gitlab.com/andrempcosta/playapp',
    slot: GymAppContent as InstanceType<typeof GymAppContent>,
    backImages: ['/projects/gym_app.gif'],
  },
];

export default projects;
