<template>
  <div>
    <span :class="{ active: active }"></span>
    <q-btn
      ref="button"
      square
      no-caps
      flat
      :label="label"
      align="left"
      :class="{ btn: true, btnActive: active }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  label: string;
  active?: boolean;
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {
  active: () => false,
});

const button = ref(null);

watch(
  () => props.width,
  (currentWidth) => {
    if (button.value !== null) {
      button.value['$el']['style'].width = `${currentWidth}px`;
    }
  }
);
</script>

<style scoped lang="sass">
.btnActive
  color: var(--q-primary) !important

.active:after
  content: ''
  position: absolute
  height: 36px
  margin-top: 0
  border-left: .17rem solid var(--q-primary)

.btn
  font-family: "Fira Code", monospace
  color: $slate
  &:hover
    color: var(--q-primary)
</style>
