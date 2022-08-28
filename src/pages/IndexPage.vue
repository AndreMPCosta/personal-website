<template>
  <q-page class="row justify-center">
    <div class="column">
      <div v-for="(section, index) in sections" :key="index">
        <KeepAlive>
          <component
            v-scroll-fire="
              (element) => showSection(element, section.name, false)
            "
            :is="section.component"
            v-bind="{ ...section.props }"
          ></component>
        </KeepAlive>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AboutSection from 'components/sections/AboutSection.vue';
import HeroSection from 'components/sections/HeroSection.vue';
import WorkPlacesSection from 'components/sections/WorkPlacesSection.vue';
import { ref, VueElement } from 'vue';

const fireAnimation = ref<boolean>(false);

const sections = [
  {
    component: HeroSection as InstanceType<typeof HeroSection>,
    name: 'HeroSection',
    props: {
      showSection,
    },
  },
  {
    component: AboutSection as InstanceType<typeof AboutSection>,
    name: 'AboutSection',
    props: {},
  },
  {
    component: WorkPlacesSection as InstanceType<typeof WorkPlacesSection>,
    name: 'WorkPlacesSection',
    props: {
      fireAnimation,
    },
  },
];

function showSection(
  element: VueElement,
  sectionName: string,
  forceCall: boolean
) {
  if (sectionName !== 'HeroSection' || forceCall) {
    element.classList.add('animate-fadeIn');
    element.addEventListener('animationend', () => {
      element.style.opacity = '1';
    });
    if (sectionName === 'WorkPlacesSection') fireAnimation.value = true;
  }
}
</script>

<style scoped lang="sass">
.animate-fadeIn
  animation: q-fadeIn ease-in 1s

@keyframes q-fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
</style>
