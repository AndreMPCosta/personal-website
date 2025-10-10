<template>
  <div>
    <p class="text-caption">
      {{ contributions.total.lastYear.toLocaleString() }} contributions in the
      last year
    </p>
    <calendar-heatmap
      :values="contributions.contributions"
      :end-date="today"
      dark-mode
      :range-color="[
        '#161b22',
        '#161b22',
        '#0e4429',
        '#006d32',
        '#26a641',
        '#39d353',
      ]"
      :round="5"
      class="calendar"
    ></calendar-heatmap>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { CalendarHeatmap } from 'vue3-calendar-heatmap';
import { ContributionsResponse } from 'src/models/ContributionsResponse';

interface Props {
  username: string;
}

const props = defineProps<Props>();
const contributions = ref<ContributionsResponse>({
  total: {
    lastYear: 0,
  },
  contributions: [
    {
      date: '',
      count: 0,
      level: 0,
    },
  ],
});

const today = new Date();
onMounted(async () => {
  const response = await axios.get(
    `https://github-contributions-api.jogruber.de/v4/${props.username}?y=last`,
  );
  contributions.value = response.data;
  setTimeout(() => {
    const legend = document.getElementsByClassName('vch__legend')[0];
    legend.children[0].remove();
    legend.children[0].remove();
  }, 10);
});
</script>

<style scoped lang="sass">
p
  font-size: 1rem
  margin-bottom: 2rem

.dark-mode
  fill: white
  font-size: 10px

.calendar
  cursor: pointer
</style>
