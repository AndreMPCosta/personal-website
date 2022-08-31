<template>
  <q-icon :name="`img:/technologies/${technology}.svg`" size="lg">
    <q-tooltip class="bg-primary" :offset="[0, 7]">
      {{ technology }}
    </q-tooltip>
  </q-icon>
</template>

<script setup lang="ts">
interface Props {
  technology: string;
}
defineProps<Props>();
</script>

<style scoped lang="sass"></style>
