<template>
  <section class="column" ref="root">
    <div class="col">
      <SectionHeader text="Workplaces" number="2" />
    </div>
    <div class="col">
      <ProjectsMain ></ProjectsMain>
    </div>
  </section>
</template>

<script setup lang="ts">

import SectionHeader from 'components/ui/SectionHeader.vue';
import ProjectsMain from 'components/sections/ProjectsMain.vue';
</script>

<style scoped lang="sass">

</style>
