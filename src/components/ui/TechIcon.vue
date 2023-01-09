<template>
  <q-icon
    :name="`img:/technologies/${
      technology !== 'C#' ? technology : 'c-sharp'
    }.svg`"
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
</script>

<style scoped lang="sass"></style>
