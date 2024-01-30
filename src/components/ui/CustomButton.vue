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
      :class="{ btn: true, btnActive: active, 'custom-wrap': true }"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';

interface Props {
  label: string;
  active?: boolean;
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {
  active: () => false,
});

const button = ref<HTMLButtonElement | null>(null);

const updateButtonWidth = async (currentWidth: number) => {
  await nextTick(); // Wait for the next DOM update cycle
  if (button.value) {
    const buttonElement = button.value.$el; // Access the actual DOM element
    if (buttonElement) {
      buttonElement.style.width = `${currentWidth}px`;
    }
  }
};

watch(
  () => props.width,
  (currentWidth) => {
    if (currentWidth) updateButtonWidth(currentWidth);
  }
);
</script>

<style scoped lang="sass">
.btnActive
  color: var(--q-primary) !important

.custom-wrap
  white-space: nowrap

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
