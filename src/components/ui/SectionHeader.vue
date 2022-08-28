<template>
  <div class="row text-h5 section-header">
    <div class="col-auto number">{{ number.padStart(2, '0') }}.</div>
    <div class="col-auto q-pl-md title">{{ text }}</div>
    <div class="col-auto q-pl-md"><hr /></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

interface Props {
  number: string;
  text: string;
}
defineProps<Props>();

const $q = useQuasar();

const lineWidth = computed(() => {
  return $q.screen.gt.sm ? '400px' : $q.screen.lt.sm ? '200px' : '400px';
});
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
  width: v-bind(lineWidth)
</style>
