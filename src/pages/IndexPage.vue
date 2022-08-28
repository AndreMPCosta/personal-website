<template>
  <q-page class="row justify-center">
    <div class="column">
      <div v-for="(section, index) in sections" :key="index">
        <component
          v-intersection="{
            handler: (element) => showSection(element, section.name),
            cfg: {
              threshold: thresholds,
            },
          }"
          :is="section.component"
          v-bind="{ ...section.props }"
        ></component>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AboutSection from 'components/sections/AboutSection.vue';
import HeroSection from 'components/sections/HeroSection.vue';
import WorkPlacesSection from 'components/sections/WorkPlacesSection.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const fireAnimation = ref<boolean>(false);
const $q = useQuasar()

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

const thresholds = [];

for (let i = 0; i <= 1.0; i += 0.01) {
  thresholds.push(i);
}

function showSection(observer: IntersectionObserverEntry, sectionName: string) {
  const val = observer.intersectionRatio * 100;
  if (
    observer.isIntersecting &&
    val > ($q.screen.lt.sm? 20: 80) &&
    !observer.target.classList.contains('animate-fadeIn')
  ) {
    observer.target.classList.add('animate-fadeIn');
    observer.target.addEventListener('animationend', () => {
      observer.target.style.opacity = '1';
    });
    if (sectionName === 'WorkPlacesSection') {
      fireAnimation.value = true;
    }
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
