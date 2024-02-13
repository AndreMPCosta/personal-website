<template>
  <div class="row q-pt-lg justify-center">
    <div class="col-lg-8 col-xs-12 text-body2" v-html="aboutDescription"></div>
    <div
      class="col-lg-4"
      :style="
        $q.screen.gt.md ? { paddingLeft: '48px' } : { paddingTop: '48px' }
      "
    >
      <q-avatar size="256px">
        <img :src="'profile_cropped_bak.jpg'" alt="profile" />
      </q-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import aboutDescription from '../../../content/about';
</script>

<style scoped lang="sass">
div
  color: $slate
</style>
