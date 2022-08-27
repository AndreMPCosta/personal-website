<template>
  <section class="column items-center">
    <div class="col">
      <SectionHeader text="Workplaces" number="2" />
    </div>
    <div class="col">
      <WorkPlacesMain />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue';
import WorkPlacesMain from './WorkPlacesMain.vue';
</script>

<style scoped></style>
