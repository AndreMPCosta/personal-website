<template>
  <div class="row q-pa-md container">
    <div class="col-3">
      <div class="q-pa-md">
        <ButtonGroup :group-elements="workPlaces" @setActive="onSetActive" />
      </div>
    </div>
    <div class="col-lg-9 q-pa-md items-start">
      <div class="q-ma-none q-mt-xs text-h6 header">
        {{ workPlaces[activeIndex].content.title }}
        <span class="primary">@ </span>
        <span class="primary">{{ workPlaces[activeIndex].label }}</span>
      </div>
      <div class="text-overline date">
        {{ workPlaces[activeIndex].content.date }}
      </div>
      <ul class="q-pa-none q-ma-none q-pt-md">
        <li
          class="q-pb-md"
          v-for="(element, index) in workPlaces[activeIndex].content.info"
          :key="index"
        >
          {{ element }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GroupElement } from 'src/models/GroupElement';
import ButtonGroup from 'components/ui/ButtonGroup.vue';
import { ref } from 'vue';

const activeIndex = ref<number>(0);

const workPlaces: GroupElement[] = [
  {
    label: 'TekPrivacy',
    content: {
      title: 'Engineer',
      companyURL: new URL('https://www.tekprivacy.pt/'),
      date: 'March 2022 — Present',
      info: [
        'Be part of the team responsible for data privacy solutions, being a full stack developer',
        'Work with a variety of different languages, and frameworks such as JavaScript, TypeScript, Python, React, Next, FastApi',
        'Develop new features, working closely with the data science team',
      ],
    },
  },
  {
    label: 'Valmedis',
    content: {
      title: 'Engineer',
      companyURL: new URL('https://www.tekprivacy.pt/'),
      date: 'March 2022 - Present',
      info: [
        'Be part of the team responsible for data privacy solutions, being a full stack developer',
        'Work with a variety of different languages, and frameworks such as JavaScript, TypeScript, Python, React, Next, FastApi',
        'Develop new features, working closely with the data science team',
      ],
    },
  },
];

function onSetActive(index: number) {
  activeIndex.value = index;
}
</script>

<style scoped lang="sass">
.container
  width: 50%

.primary
  color: var(--q-primary)

.header
  color: $lightest-slate
.date
  font-family: "Fira Code", monospace
  padding-left: 1.5px
  color: $light-slate

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
</style>
