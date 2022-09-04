<template>
  <div class="row q-gutter-xs q-py-sm" v-for="slide in slides" :key="slide">
    <q-btn
      dense
      round
      flat
      icon="eva-arrow-forward-outline"
      @click="changeActiveSlide(slide)"
      :color="activeSlide === slide ? 'primary' : 'white'"
    />
  </div>
</template>

<script setup lang="ts">

interface Props {
  activeSlide: number;
  slides: number[];
}
defineProps<Props>();
const emit = defineEmits(['changedActiveSlide']);

function changeActiveSlide(slide: number){
  emit('changedActiveSlide', slide);
}

</script>

<style scoped lang="sass"></style>
