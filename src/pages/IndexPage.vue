<template>
  <q-page class="row justify-center">
    <div class="column">
      <div v-for="(section, index) in sections" :key="index">
        <component
          v-scroll-fire="showSection"
          v-bind:is="section"
          style="opacity: 0"
        ></component>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AboutSection from 'components/sections/AboutSection.vue';
import HeroSection from 'components/sections/HeroSection.vue';
import WorkPlacesSection from 'components/sections/WorkPlacesSection.vue';
import { VueElement } from 'vue';

const sections = [HeroSection, AboutSection, WorkPlacesSection];

function showSection(element: VueElement) {
  element.classList.add('animate-fadeInUp');
  element.addEventListener('animationend', () => {
    element.style.opacity = '1';
  });
}
</script>

<style scoped lang="sass">
.animate-fadeInUp
  animation: q-fadeInUp ease-in 1s

@keyframes q-fadeInUp
  0%
    opacity: 0
  100%
    opacity: 1
</style>
