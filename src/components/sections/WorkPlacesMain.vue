<template>
  <div class="row q-pt-lg">
    <div class="col-3">
      <div class="q-pt-md">
        <ButtonGroup :group-elements="workPlaces" @setActive="onSetActive" />
      </div>
    </div>
    <div class="col-lg-9 q-pa-md items-start">
      <div class="q-ma-none q-mt-xs text-h6 header">
        {{ workPlaces[activeIndex].content.title }}
        <span class="primary">@ </span>
        <a
          class="primary hover-underline-animation"
          rel="noopener noreferrer"
          target="_blank"
          :href="workPlaces[activeIndex].content.companyURL"
          >{{ workPlaces[activeIndex].label }}</a
        >
      </div>
      <div class="text-overline date">
        {{ workPlaces[activeIndex].content.date }}
      </div>
      <ul class="q-pa-none q-ma-none q-pt-md">
        <li
          class="q-pb-md text-body2"
          v-for="(element, index) in workPlaces[activeIndex].content.info"
          :key="index"
        >
          {{ element }}
        </li>
      </ul>
      <div class="text-body2 column">
        <div class="col q-pb-md">Languages/Frameworks:</div>
        <div class="col q-gutter-md" ref='tech'>
          <TechIcon
            :technology="technology"
            v-for="technology in workPlaces[activeIndex].content.technologies"
            :key="technology"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonGroup from 'components/ui/ButtonGroup.vue';
import { ref, watch } from 'vue';
import workPlaces from 'src/content/workplaces';
import TechIcon from 'components/ui/TechIcon.vue';


interface Props {
  fireAnimation: Record<string, boolean>
}
const props = defineProps<Props>()
const tech = ref<HTMLElement| null>(null)

watch(props.fireAnimation, () => {
  if (props.fireAnimation)
    tech?.value?.classList.add('animate-bounceInUp');
})

const activeIndex = ref<number>(0);

function onSetActive(index: number) {
  activeIndex.value = index;
}
</script>

<style scoped lang="sass">
.primary
  color: var(--q-primary)

.header
  color: $lightest-slate

.date
  font-family: "Fira Code", monospace
  padding-left: 1.5px
  color: $light-slate

.hover-underline-animation
  text-decoration: none
  display: inline-block
  position: relative
  color: var(--q-primary)

.hover-underline-animation:after
  content: ''
  position: absolute
  width: 100%
  transform: scaleX(0)
  height: 1px
  bottom: 0
  left: 0
  background-color: var(--q-primary)
  transform-origin: bottom left
  transition: transform 0.25s ease-out

.hover-underline-animation:hover:after
  transform: scaleX(1)
  transform-origin: bottom left

ul
  list-style: none
  li
    max-width: 400px
    position: relative
    padding-left: 20px
    color: $slate
  li::before
    content: "»"
    position: absolute
    left: 0
    color: var(--q-primary)

.animate-bounceInUp
  animation: q-bounceInUp cubic-bezier(0.215, 0.61, 0.355, 1) 1s

@keyframes q-bounceInUp
  0%
    opacity: 0
    transform: translate3d(0, 3000px, 0) scaleY(3)
  60%
    opacity: 1
    transform: translate3d(0, -25px, 0) scaleY(1)
  75%
    transform: translate3d(0, 10px, 0) scaleY(0.98)
  90%
    transform: translate3d(0, -5px, 0) scaleY(0.995)
  100%
    transform: translate3d(0, 0, 0)
</style>
