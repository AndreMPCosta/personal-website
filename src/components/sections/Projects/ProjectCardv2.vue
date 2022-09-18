<template>
  <q-card square>
    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pt-sm">
      {{ lorem }}
    </q-card-section>
  </q-card>
</template>

<script setup lang='ts'>
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

</script>

<style scoped lang='sass'>

</style>
