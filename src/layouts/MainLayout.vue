<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="q-dark text-white">
      <q-toolbar class="extra-p">
        <div class="row items-center justify-center full-width">
          <tool-bar-item
            :number="(index + 1).toString()"
            :label="item.label"
            v-for="(item, index) in items"
            :key="index"
            :section="item.section"
            class="q-pr-lg"
            :is-faded="isFaded[index]"
            @mouseover="controlFade(index, true)"
            @mouseleave="controlFade(index, false)"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import ToolBarItem from 'components/ui/ToolBarItem.vue';
import { ref } from 'vue';

const items = [
  {
    label: 'About',
    section: 'AboutSection',
  },
  {
    label: 'Workplaces',
    section: 'WorkPlacesSection',
  },
  {
    label: 'Projects',
    section: 'ProjectsSection',
  },
];

const isFaded = ref<boolean[]>(Array(items.length).fill(false));

function controlFade(index: number, enter: boolean) {
  isFaded.value = isFaded.value.map(() => enter);
  if (enter) isFaded.value[index] = false;
}
</script>

<style scoped lang="sass">
.dark-header
  background-color: $dark-page

.extra-p
  padding-left: 8rem
</style>
