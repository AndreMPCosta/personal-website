<template>
  <section ref='root'>
    <div class='col col-xs-12'>
      <SectionHeader text='About' number='1' />
    </div>
    <div class='col'>
      <AboutMain />
    </div>
    <GitHubCalendar class='q-pt-lg'/>
  </section>
</template>

<script setup lang='ts'>
import SectionHeader from '../../ui/SectionHeader.vue';
import AboutMain from './AboutMain.vue';
import { onMounted, ref, VueElement } from 'vue';
import GitHubCalendar from 'components/ui/GitHubCalendar.vue';

const root = ref<VueElement | null>(null);


onMounted(async () => {
  if (root.value) root.value.style.opacity = '0';
});

</script>

<style scoped lang='sass'>

</style>
