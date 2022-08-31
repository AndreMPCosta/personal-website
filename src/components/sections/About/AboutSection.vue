<template>
  <section ref="root">
    <div class="col col-xs-12">
      <SectionHeader text="About" number="1" />
    </div>
    <div class="col">
      <AboutMain />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../../ui/SectionHeader.vue';
import AboutMain from './AboutMain.vue';
import { onMounted, ref, VueElement } from 'vue';

const root = ref<VueElement | null>(null);
onMounted(() => {
  if (root.value) root.value.style.opacity = '0';
});

</script>
