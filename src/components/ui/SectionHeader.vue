<template>
  <div class="row text-h5 section-header">
    <div class="col-auto number" ref="numeration">
      {{ number.padStart(2, '0') }}.
    </div>
    <div class="col-auto q-pl-md title" ref="title">{{ text }}</div>
    <div class="col-auto q-pl-md"><hr /></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';

interface Props {
  number: string;
  text: string;
}
defineProps<Props>();

const numeration = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);

const q = useQuasar();

const lineWidth = computed(() => {
  if (numeration.value && title.value)
    return q.screen.gt.sm
      ? '400px'
      : `${
          q.screen.width -
          (numeration.value.clientWidth + title.value.clientWidth + 50)
        }px`;
  return '400px';
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
