<template>
  <div
    class="col-auto items-center justify-center control-fade hover-underline-animation"
    @click="scrollToSection"
  >
    <div class="row number justify-end" :style="{ opacity: number ? 1 : 0 }">
      {{ number ? number.padStart(2, '0') : '00' }}
    </div>
    <div class="row q-pl-xs label">// {{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

interface Props {
  number?: string | boolean;
  label: string;
  section: string | null;
  isFaded: boolean;
}

const props = defineProps<Props>();
const q = useQuasar();

function scrollToSection() {
  if (props.section) {
    const element = document.getElementById(props.section);
    if (element != null) {
      if (q.screen.lt.md)
        setTimeout(() => {
          window.scrollTo({
            left: window.scrollX,
            top: element.offsetTop - 40,
            behavior: 'smooth',
          });
        }, 1);
      else
        window.scrollTo({
          left: window.scrollX,
          top: element.offsetTop - 40,
          behavior: 'smooth',
        });
    }
  } else {
    if (q.screen.lt.md)
      setTimeout(() => {
        window.scrollTo({
          left: window.scrollX,
          top: 0,
          behavior: 'smooth',
        });
      }, 1);
    else
      window.scrollTo({
        left: window.scrollX,
        top: 0,
        behavior: 'smooth',
      });
  }
}

const opacity = computed(() => {
  return props.isFaded ? 0.5 : 1;
});
</script>

<style scoped lang="sass">
.number
  font-family: "Fira Code", monospace
  font-weight: 400
  font-size: .8rem
  color: var(--q-primary)

.label
  font-family: "Fira Code", monospace
  font-weight: 1000
  color: white
  font-size: 1.1rem

.control-fade
  opacity: v-bind(opacity)

div.col-auto
  cursor: pointer
</style>
