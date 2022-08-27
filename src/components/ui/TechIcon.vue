<template>
  <q-icon :name="`img:${technology}.svg`" size='lg'/>
</template>

<script setup lang="ts">
interface Props {
  technology: string;
}
defineProps<Props>();
</script>

<style scoped lang="sass"></style>
