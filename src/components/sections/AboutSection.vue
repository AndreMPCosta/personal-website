<template>
  <section>
    <div class="col">
      <SectionHeader text="About" number="1" />
    </div>
    <div class="col">
      <AboutMain />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue';
import AboutMain from './AboutMain.vue';
</script>
