<template>
  <q-layout view="hHh lpR fFf">
    <div class="logo logo-font q-pl-md row items-center">
      <div class="col-auto q-pr-lg" v-if="q.screen.lt.md">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </div>
      <div class="col-auto">
        <span>A</span><span>n</span><span>d</span><span>r</span><span>é</span>
        <span style="margin-left: 1rem">C</span><span>o</span><span>s</span
        ><span>t</span><span>a</span>
      </div>
    </div>
    <q-header reveal class="q-dark text-white q-py-sm" v-if="q.screen.gt.sm">
      <q-toolbar class="extra-p">
        <div class="row items-center justify-center full-width q-gutter-lg">
          <tool-bar-item
            :number="(index + 1).toString()"
            :label="item.label"
            v-for="(item, index) in items"
            :key="index"
            :section="item.section"
            :is-faded="isFaded[index]"
            @mouseover="controlFade(index, true)"
            @mouseleave="controlFade(index, false)"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="200"
      side="left"
      overlay
      class="text-white"
      behavior="mobile"
    >
      <q-scroll-area class="fit">
        <q-list class="q-pt-lg">
          <div class="q-pl-sm">
            <q-btn
              round
              flat
              unelevated
              color="q--dark-page"
              icon="clear"
              @click="drawer = !drawer"
            />
          </div>
          <template v-for="(item, index) in items" :key="index">
            <q-item clickable v-ripple @click='drawer = false'>
              <q-item-section>
                <tool-bar-item
                  :label="item.label"
                  :key="index"
                  :section="item.section"
                  :is-faded="isFaded[index]"
                  @mouseover="controlFade(index, true)"
                  @mouseleave="controlFade(index, false)"
                />
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import ToolBarItem from 'components/ui/ToolBarItem.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const q = useQuasar();
const drawer = ref<boolean>(false);

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
  background-color: var(--q-dark-page)

.extra-p
  padding-left: 8rem

.logo
  position: absolute
  color: white
  z-index: 2001
  height: 66px

.logo span:nth-child(5n + 1)
  color: var(--q-primary)
  display: inline-block

  &:hover
    animation: rubberBand
    animation-duration: 1s
</style>
