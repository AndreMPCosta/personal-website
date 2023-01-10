<template>
  <div>
    <p class="text-caption">{{ contributions }}</p>
    <div class="col col-xs-12 q-px-sm" v-html="fetchedSVG"></div>
    <!--    <img src='http://localhost:10000/andrempcosta/contributions?get_image=true' alt='github-chart'/>-->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from 'boot/axios';

interface Props {
  username: string;
}

const props = defineProps<Props>();

const fetchedSVG = ref('');
const contributions = ref('');

let svg: HTMLElement;
let svgG: HTMLElement;
let widthSvgG: number;
let transformSvgG: string;
let splat: string[];
let originalTranslateX: number;
let originalTranslateY: number;

onMounted(async () => {
  fetchSVG().then();
  svg = await onElementFound('.js-calendar-graph-svg', {
    timeout: 10000,
    freq: 100,
  });
  svgG = document.querySelector('.js-calendar-graph-svg g') as HTMLElement;
  widthSvgG = svgG.getBoundingClientRect().width;
  transformSvgG = window.getComputedStyle(svgG).transform;
  splat = transformSvgG.split(',');
  originalTranslateX = parseInt(splat[4]);
  originalTranslateY = parseInt(splat[5]);
  adjustSvgPosition();
});

async function fetchSVG() {
  console.log(process.env.ENVIRONMENT)
  console.log(process.env.GITHUB_CALENDAR_URL)
  const response = await api.get(`/${props.username}/contributions`);
  fetchedSVG.value = response.data.svg;
  contributions.value = response.data.contributions;
  setTimeout(() => {
    const days = Array.from(
      document.querySelectorAll('.ContributionCalendar-day')
    ) as HTMLElement[];
    days.forEach((day) => {
      day.addEventListener('mousemove', (event: Event) => {
        showToolTip(event as MouseEvent, day.innerHTML);
      });
      day.addEventListener('mouseout', () => {
        hideToolTip();
      });
    });
  }, 200);
}

function onElementFound(selector: string, { timeout = 10000, freq = 100 }) {
  return new Promise<HTMLElement>((resolve, reject) => {
    let elapsed = 0;

    const interval = setInterval(() => {
      const element = document.querySelector(selector);

      if (element) {
        clearInterval(interval);
        resolve(element as HTMLElement);
      } else {
        elapsed += freq;
        if (elapsed >= timeout) {
          reject(`Failed to find ${selector} after ${timeout}ms.`);
        }
      }
    }, freq);
  });
}

function adjustSvgPosition() {
  const widthSvg = parseInt(window.getComputedStyle(svg).width);
  const diff = widthSvgG - widthSvg;
  const newTranslateX = originalTranslateX - Math.max(0, diff);
  svgG.style.transform = `translate(${newTranslateX}px, ${originalTranslateY}px)`;
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

<style scoped lang="sass">
p
  font-size: 1rem
  margin-bottom: 2rem
</style>
