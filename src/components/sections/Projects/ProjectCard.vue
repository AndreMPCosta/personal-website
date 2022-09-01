<template>
  <q-flashcard square class="card">
    <q-item>
      <q-item-section avatar>
        <q-avatar> <img :src="imageSrc" :alt="`image_${title}`" /> </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-primary text-h6 text-weight-bold title">
          <a :href="homepage" target="_blank">{{ title }}</a></q-item-label
        >
        <q-item-label caption class="header-subtitle">
          {{ subtitle }}
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section>
      <slot v-if="project.slot"
        ><component :is="project.slot"></component
      ></slot>
    </q-card-section>

    <q-card-actions>
      <div class="fit row wrap justify-end items-center">
        <q-btn
          round
          flat
          icon="eva-github-outline"
          size="md"
          class="q-pr-md changeColor"
          :href="github"
          target="_blank"
        />
        <q-btn
          v-if="project.gitlab"
          round
          flat
          icon="img:/icons/gitlab.svg"
          size="md"
          class="q-pr-md changeColor"
          :href="project.gitlab"
          target="_blank"
        />
        <q-btn
          v-if="homepage"
          round
          flat
          icon="eva-link-outline"
          size="md"
          class="q-pr-md changeColor"
          :href="homepage"
          target="_blank"
        />
        <q-btn color="grey" flat @click="expanded = !expanded">
          <div class="row items-center no-wrap changeColor">
            <div class="text-overline q-pr-xs changeColor">Stack</div>
            <q-icon right name="eva-chevron-up-outline" v-if="expanded" />
            <q-icon right name="eva-chevron-down-outline" v-if="!expanded" />
          </div>
        </q-btn>
      </div>
    </q-card-actions>
    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          <div class="row q-gutter-md justify-end">
            <TechIcon
              size="sm"
              :technology="technology"
              v-for="technology in stack"
              :key="technology"
            />
          </div>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-flashcard>
  <!--    <q-card-->
  <!--      square-->
  <!--      class="card"-->
  <!--      v-if="isFlipped"-->
  <!--      @mouseleave="isFlipped = !isFlipped"-->
  <!--    >-->
  <!--      Test-->
  <!--    </q-card>-->
</template>

<script setup lang="ts">
import { Project } from 'src/models/Project';
import { reactive, ref } from 'vue';
import TechIcon from 'components/ui/TechIcon.vue';

import { QFlashcard } from '@quasar/quasar-ui-qflashcard/dist/index.esm'

interface Props {
  project: Project;
}

const props = defineProps<Props>();
const { imageSrc, title, subtitle, stack, github, homepage } = reactive(
  props.project
);

const expanded = ref<boolean>(false);
</script>

<style scoped lang="sass">
.card
  width: 400px
  max-width: 550px
  min-height: 300px

  @media (max-width: $breakpoint-md-max)
    max-width: 350px

.header-subtitle
  color: $slate !important

.changeColor:hover
  color: $primary

a
  text-decoration: none
a:visited
  color: inherit
</style>
