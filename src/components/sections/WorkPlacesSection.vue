<template>
  <section class="column items-center" ref="root">
    <div class="col">
      <SectionHeader text="Workplaces" number="2" />
    </div>
    <div class="col">
      <WorkPlacesMain :fire-animation="fireAnimation" />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue';
import WorkPlacesMain from './WorkPlacesMain.vue';
import { onMounted, ref, VueElement } from 'vue';

interface Props {
  fireAnimation: Record<string, boolean>;
}
defineProps<Props>();

const root = ref<VueElement | null>(null);
onMounted(() => {
  if (root.value) root.value.style.opacity = '0';
});
</script>

<style scoped></style>
