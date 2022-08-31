<template>
  <q-card square class="card">
    <q-item>
      <q-item-section avatar>
        <q-avatar> <img :src="imageSrc" :alt="`image_${title}`" /> </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-primary text-body1 text-weight-bold">{{ title }}</q-item-label>
        <q-item-label caption class="header-subtitle">
          {{ subtitle }}
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section>
      <slot></slot>
    </q-card-section>

    <q-card-actions>
      <div class="fit row wrap justify-end items-center">
        <div class='text-overline q-pr-md'>Stack</div>
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </div>
    </q-card-actions>
    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script setup lang="ts">
import { Project } from 'src/models/Project';
import { ref, toRefs } from 'vue';
interface Props {
  project: Project;
}

const props = defineProps<Props>();
const { imageSrc, title, subtitle } = toRefs(props.project);

const expanded = ref<boolean>(false);
</script>

<style scoped lang="sass">
.card
  width: 400px
  max-width: 550px
.header-subtitle
  color: $slate !important
</style>
