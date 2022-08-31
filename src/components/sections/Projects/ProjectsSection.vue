<template>
  <section class="column" ref="root">
    <div class="col">
      <SectionHeader text="Projects" number="3" />
    </div>
    <div class="col q-gutter-lg q-pt-lg">
      <ProjectCard
        :key='project.title'
        v-for="project in projects"
        :project='project'
      ></ProjectCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from 'components/ui/SectionHeader.vue';
import ProjectCard from 'components/sections/Projects/ProjectCard.vue';
import projects from '../../../content/projects';
import { onMounted, ref, VueElement } from 'vue';

const root = ref<VueElement | null>(null);
onMounted(() => {
  if (root.value) root.value.style.opacity = '0';
});
</script>

<style scoped lang="sass"></style>
