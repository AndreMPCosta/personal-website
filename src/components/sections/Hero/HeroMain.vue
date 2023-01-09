<template>
  <div class="row q-pt-lg hero">
    <div class="column">
      <div :class="headerClass" id="animate">
        <span>H</span>
        <span>i</span>
        <span>,</span>
        <br />
        <span>I</span>
        <span style="margin-left: 2rem">a</span>
        <span>m</span>
        <span style="margin-left: 2rem" class="mainLetter">A</span>
        <span>n</span>
        <span>d</span>
        <span>r</span>
        <span>é</span>
        <span>,</span>
        <br />
        <span>a</span>
        <span style="margin-left: 2rem">s</span>
        <span>o</span>
        <span>f</span>
        <span>t</span>
        <span>w</span>
        <span>a</span>
        <span>r</span>
        <span>e</span>
        <br v-if="$q.screen.lt.sm" />
        <span :style="{ marginLeft: $q.screen.gt.xs ? '32px' : 0 }">e</span>
        <span>n</span>
        <span>g</span>
        <span>i</span>
        <span>n</span>
        <span>e</span>
        <span>e</span>
        <span>r</span>
        <span>.</span>
      </div>
      <div :class="footerClass">Full Stack Developer / Python Expert</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const headerClass = computed(() => {
  return $q.screen.gt.sm ? 'text-h1' : $q.screen.gt.xs ? 'text-h3' : 'text-h4';
});

const footerClass = computed(() => {
  const base = 'text-overline text-blue-grey-4';
  return $q.screen.gt.sm
    ? base + ' q-px-xs'
    : $q.screen.lt.sm
    ? base + ' q-px-lg'
    : base + ' q-px-xs';
});
</script>

<style scoped lang="sass">
.mainLetter
  color: var(--q-primary)

#animate > span
  display: inline-block

#animate > span:hover
  color: var(--q-primary)
  animation: rubberBand
  animation-duration: 1s
</style>
