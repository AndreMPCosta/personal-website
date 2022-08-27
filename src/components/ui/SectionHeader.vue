<template>
  <div class="row text-h5 section-header">
    <div class="col-auto number">{{ number.padStart(2, '0') }}.</div>
    <div class="col-auto q-pl-md title">{{ text }}</div>
    <div class="col-auto q-pl-md"><hr /></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: string;
  text: string;
}
defineProps<Props>();
</script>

<style scoped lang="sass">

.number
  font-family: "Fira Code", monospace
  font-weight: 400
  font-size: 1.5rem
  color: var(--q-primary)

.title
  font-weight: 600

hr
  border: none
  position: relative
  height: 1px
  color: #333
  background-color: #333
  top: 5px
  left: 0
  width: 400px
</style>
