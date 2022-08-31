import { Project } from 'src/models/Project';
import GymAppContent from 'components/projectSlots/GymAppContent.vue';

const projects: Project[] = [
  {
    imageSrc: '/projects/mangalibe.png',
    title: 'Mangalibe',
    subtitle: 'Acessories/Clothes Online Shop',
    stack: ['vue', 'quasar', 'mongodb', 'fastapi', 'Python'],
    github: 'https://github.com/AndreMPCosta/backend-ecommerce',
    homepage: 'https://mangalibe.com'
  },
  {
    imageSrc: '/projects/padel_primary.png',
    title: 'Padel Checker',
    subtitle: 'Tool For Padel Players',
    stack: ['FastApi', 'MongoDB', 'Python'],
    github: 'https://github.com/AndreMPCosta/padel-checker-pub',
    homepage: 'http://185.185.127.191:8000/docs'
  },
  {
    imageSrc: '/projects/gym.png',
    title: 'Gym App',
    subtitle: 'Mobile App for a Gymnasium',
    stack: ['Flask', 'Python', 'Kivy'],
    github: 'https://github.com/AndreMPCosta/PlayRestAPI',
    gitlab: 'https://gitlab.com/andrempcosta/playapp',
    slot: GymAppContent as InstanceType<typeof GymAppContent>
  }
];

export default projects
