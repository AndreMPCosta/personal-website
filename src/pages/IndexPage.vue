<template>
  <q-page class="row justify-center">
    <div class="column">
      <div v-for="(section, index) in sections" :key="index">
        <component
          :id="section.name"
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
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="200"
      :offset="[18, 18]"
    >
      <q-btn
        fab-mini
        icon="keyboard_arrow_up"
        color="white"
        text-color="primary"
        @click="scrollToTop"
      />
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts">
import AboutSection from 'components/sections/About/AboutSection.vue';
import HeroSection from 'components/sections/Hero/HeroSection.vue';
import WorkPlacesSection from 'components/sections/WorkPlaces/WorkPlacesSection.vue';
import ProjectsSection from 'components/sections/Projects/ProjectsSection.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const fireAnimation = ref<boolean>(false);
const q = useQuasar();

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
  {
    component: ProjectsSection as InstanceType<typeof ProjectsSection>,
    name: 'ProjectsSection',
    props: {},
  },
];

const thresholds = [];

for (let i = 0; i <= 1.0; i += 0.01) {
  thresholds.push(i);
}

function showSection(observer: IntersectionObserverEntry, sectionName: string) {
  const val = observer.intersectionRatio * 100;
  if (
    (observer.isIntersecting &&
      val > (q.screen.lt.sm ? 20 : 80) &&
      !observer.target.classList.contains('animate-fadeIn')) ||
    (observer.isIntersecting && sectionName === 'ProjectsSection' && val > 20)
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

function scrollToTop() {
  window.scrollTo({
    left: window.scrollX,
    top: 0,
    behavior: 'smooth',
  });
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
