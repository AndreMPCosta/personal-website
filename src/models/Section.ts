import HeroSection from 'components/sections/Hero/HeroSection.vue';
import AboutSection from 'components/sections/About/AboutSection.vue';
import WorkPlacesSection from 'components/sections/WorkPlaces/WorkPlacesSection.vue';

export interface Section {
  component:
    | InstanceType<typeof HeroSection>
    | InstanceType<typeof AboutSection>
    | InstanceType<typeof WorkPlacesSection>;
  name: string;
  props: Record<string, unknown>;
}
