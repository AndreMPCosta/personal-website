<template>
  <div class='col col-xs-12 q-px-sm' v-html='fetchedSVG'>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref} from 'vue';
import axios from 'axios';

const fetchedSVG = ref('');

let svg: HTMLElement;
let svgG: HTMLElement;
let widthSvgG: number;
let transformSvgG: string;
let splat: string[];
let originalTranslateX: number;
let originalTranslateY: number;


function onElFound(selector: string, { timeout = 10000, freq = 100 }) {
  return new Promise<HTMLElement>((resolve, reject) => {
    let elapsed = 0;

    const interval = setInterval(() => {
      const el = document.querySelector(selector);

      if (el) {
        clearInterval(interval);
        resolve(el as HTMLElement);
      } else {
        elapsed += freq;
        if (elapsed >= timeout) {
          reject(`Failed to find ${selector} after ${timeout}ms.`);
        }
      }
    }, freq);
  });
}


onMounted(async () => {
  fetchSVG().then();
  svg = await onElFound('.js-calendar-graph-svg', { timeout: 10000, freq: 100 });
  svgG = document.querySelector('.js-calendar-graph-svg g') as HTMLElement;
  widthSvgG = svgG.getBoundingClientRect().width;
  transformSvgG = window.getComputedStyle(svgG).transform;
  splat = transformSvgG.split(',');
  originalTranslateX = parseInt(splat[4]);
  originalTranslateY = parseInt(splat[5]);
  adjustSvgPosition();
});

function adjustSvgPosition() {
  const widthSvg = parseInt(window.getComputedStyle(svg).width);
  const diff = widthSvgG - widthSvg;
  const newTranslateX = originalTranslateX - Math.max(0, diff);
  svgG.style.transform = `translate(${newTranslateX}px, ${originalTranslateY}px)`;
}

async function fetchSVG() {
  const response = await axios.get('http://localhost:10000/andrempcosta');
  fetchedSVG.value = response.data;
  setTimeout(() => {
    const days = Array.from(document.querySelectorAll('.ContributionCalendar-day')) as HTMLElement[];
    days.forEach((day) => {
      let date = new Date();
      let yearDate = '';
      let monthDate = '';
      let dayDate = '';
      if (day.dataset.date) {
        date = new Date(day.dataset.date);
        yearDate = date.toLocaleString('default', { year: 'numeric' });
        monthDate = date.toLocaleString('default', { month: 'short' });
        dayDate = date.toLocaleString('default', { day: '2-digit' });
      }
      day.addEventListener('mousemove', (event: Event) => {
        showToolTip(
          event as MouseEvent,
          `<b>${day.dataset.count} ${day.dataset.count !== '1' ?
            'contributions' :
            'contribution'
          }</b> on ${monthDate} ${dayDate}, ${yearDate}`);
      });
      day.addEventListener('mouseout', () => {
        hideToolTip();
      });
    });
  }, 200);
}

function showToolTip(event: MouseEvent, text: string | undefined) {
  const tooltip = document.getElementById('tooltip');
  if (tooltip && text) {
    tooltip.innerHTML = text;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX}px`;
    tooltip.style.top = `${event.pageY - 30}px`;
    tooltip.style.transform = 'translateX(-50%)';
  }
}

function hideToolTip() {
  const tooltip = document.getElementById('tooltip');
  if (tooltip) tooltip.style.display = 'none';
}

window.addEventListener('resize', () => {
  adjustSvgPosition();
});

</script>

<style scoped lang='sass'>

</style>
