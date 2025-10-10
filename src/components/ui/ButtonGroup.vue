<template>
  <div class="column">
    <div
      class="col"
      v-for="(group, index) in groupElements"
      :key="group.label"
      :ref="setButtonRef"
    >
      <custom-button
        :label="group.label"
        :active="activeElement === index"
        :onclick="() => handleClick(index)"
        v-bind:width="maxWidth"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GroupElement } from 'src/models/GroupElement';
import CustomButton from 'components/ui/CustomButton.vue';
import { computed, ref, watch } from 'vue';

interface Props {
  groupElements: GroupElement[];
}

withDefaults(defineProps<Props>(), {
  groupElements: () => [],
});

const activeElement = ref<number>(0);
const buttonRefs = ref<HTMLElement[]>([]);

const setButtonRef = (el: HTMLElement) => {
  if (el) {
    buttonRefs.value.push(el);
  }
};

function handleClick(index: number) {
  activeElement.value = index;
  emit('setActive', index);
}

const maxWidth = computed(() => {
  let tempWidth = 0;
  buttonRefs.value.forEach((elem) => {
    const child = elem.children[0]?.lastChild as HTMLElement;
    // console.log(child, child.offsetWidth);
    if (child && child.offsetWidth > tempWidth) {
      tempWidth = child.offsetWidth;
    }
  });
  // console.log(tempWidth);
  return tempWidth;
});

const emit = defineEmits(['setActive']);

watch(
  () => maxWidth,
  (currentWidth, prevWidth) => {
    console.log(currentWidth, prevWidth);
  },
);
</script>

<style scoped lang="sass"></style>
