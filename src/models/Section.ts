import HeroSection from 'components/sections/HeroSection.vue';
import AboutSection from 'components/sections/AboutSection.vue';
import WorkPlacesSection from 'components/sections/WorkPlacesSection.vue';

export interface Section {
  component:
    | InstanceType<typeof HeroSection>
    | InstanceType<typeof AboutSection>
    | InstanceType<typeof WorkPlacesSection>;
  name: string;
  props: Object;
}
