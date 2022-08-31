import { VueElement } from 'vue';

export interface Project {
  imageSrc: string;
  title: string;
  subtitle: string;
  slot?: VueElement;
  stack: string[];
  github: string;
  gitlab?: string;
  homepage?: string;
}
