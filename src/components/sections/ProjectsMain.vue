<template>
  <q-card>
    <q-item>
      <q-item-section avatar>
        <q-avatar> <img :src="imageSrc" :alt="`image_${title}`"/> </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption> {{ subtitle }} </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

import {Project} from 'src/models/Project';

defineProps<Project>();
</script>

<style scoped lang="sass"></style>
