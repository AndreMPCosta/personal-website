<template>
  <q-icon
    :name="`img:/technologies/${getIconName(technology)}.svg`"
    :size="size ? size : 'lg'"
  >
    <q-tooltip class="bg-primary text-capitalize" :offset="[0, 7]">
      {{ technology !== 'vue' ? technology : 'Vue.js' }}
    </q-tooltip>
  </q-icon>
</template>

<script setup lang="ts">
interface Props {
  technology: string;
  size?: string;
}
defineProps<Props>();

function getIconName(technology: string): string {
  if (technology === 'C#') return 'c-sharp';
  if (technology === 'Google Cloud Platform') return 'Google Cloud Platform';
  return technology.toLowerCase();
}
</script>

<style scoped lang="sass"></style>
