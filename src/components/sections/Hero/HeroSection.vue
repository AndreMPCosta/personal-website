<template>
  <section ref="root">
    <div class="col">
      <HeroMain />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroMain from './HeroMain.vue';
import { onMounted, ref, VueElement } from 'vue';

interface Props {
  showSection: (
    element: VueElement | null,
    sectionName: string,
    forceCall: boolean
  ) => void;
}

const props = defineProps<Props>();

const root = ref<VueElement | null>(null);
onMounted(() => {
  if (root.value) root.value.style.opacity = '0';
  props.showSection(root?.value, 'HeroSection', true);
});
</script>

<style scoped></style>
