<template>
  <q-card square class="customCard">
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
      <q-item>
        <q-btn
          ref="arrow"
          class='arrow'
          round
          flat
          :ripple="false"
          icon="eva-arrow-forward-outline"
          @click="flip"
        />
      </q-item>
    </q-item>

    <q-separator />
    <div ref="front" class="flip-left-out">
      <q-card-section>
        <slot v-if="project.slot"
          ><component :is="project.slot"></component
        ></slot>
      </q-card-section>
    </div>
    <div ref="actions">
      <q-card-actions class="actions">
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
            <div class="fit row items-center no-wrap changeColor">
              <div class="text-overline q-pr-xs changeColor">Stack</div>
              <q-icon right name="eva-chevron-up-outline" v-if="expanded" />
              <q-icon right name="eva-chevron-down-outline" v-if="!expanded" />
            </div>
          </q-btn>
        </div>
      </q-card-actions>

      <q-slide-transition class="expanded-actions">
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
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
    </div>

    <div ref="back" class="backCard flip-left-in">
      <q-img
        :alt="subtitle"
        src="https://camo.githubusercontent.com/3a5be86d350ecd4e18003b3acdd9fcb71f5095e286a74481d3e08a98add3e9bb/68747470733a2f2f692e696d6775722e636f6d2f39486d72644e512e676966"
        :width="$q.screen.gt.xs ? '460px' : '320px'"
        fit="scale-down"
      />
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { Project } from 'src/models/Project';
import { reactive, ref } from 'vue';
import TechIcon from 'components/ui/TechIcon.vue';
import { QBtn } from 'quasar';

interface Props {
  project: Project;
}

const props = defineProps<Props>();
const { imageSrc, title, subtitle, stack, github, homepage } = reactive(
  props.project
);

const arrow = ref<QBtn | null>(null);
const front = ref<HTMLElement | null>(null);
const back = ref<HTMLElement | null>(null);
const actions = ref<HTMLElement | null>(null);
const backFace = ref<boolean>(true);
const expanded = ref<boolean>(false);

function flip() {
  if (backFace.value) {
    front.value?.classList.remove('flip-left-out');
    back.value?.classList.remove('flip-left-in');
    front.value?.classList.add('flip-left-out--active');
    back.value?.classList.add('flip-left-in--active');
    actions.value?.classList.remove('animate-fadeIn');
    arrow.value?.$el.classList.add('rotate-back')
  } else {
    front.value?.classList.add('flip-left-out');
    back.value?.classList.add('flip-left-in');
    front.value?.classList.remove('flip-left-out--active');
    back.value?.classList.remove('flip-left-in--active');
    actions.value?.classList.add('animate-fadeIn');
    arrow.value?.$el.classList.remove('rotate-back')
  }
  backFace.value = !backFace.value;
}
</script>

<style scoped lang="sass">
.customCard
  width: 460px
  height: 696px

  @media (max-width: $breakpoint-xs-max)
    width: 320px
    height: 510px

.backCard
  position: absolute
  left: 0
  top: 75px
  width: 500px
  height: 600px

.header-subtitle
  color: $slate !important

.changeColor:hover
  color: $primary

a
  text-decoration: none
a:visited
  color: inherit

.flip-left-out
  transition: all 1s ease-out
  backface-visibility: hidden

.flip-left-in
  transition: all 1s ease-out
  backface-visibility: hidden
  transform: perspective(400px) rotateY(180deg)

.flip-left-out--active
  transform: perspective(400px) rotateY(-180deg)
  backface-visibility: hidden
  transition: all 1s ease-out

.flip-up-in--active
  transform: perspective(400px) rotateX(0)
  backface-visibility: hidden
  transition: all 1s ease-out

.actions
  position: absolute
  bottom: 60px
  width: 100%

.expanded-actions
  position: absolute
  bottom: 0
  width: 100%

.animate-fadeIn
  animation: q-fadeIn ease-out 1s

@keyframes q-fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

.animate-fadeOut
  animation: q-fadeOut ease-out 1s

@keyframes q-fadeOut
  0%
    opacity: 1
  100%
    opacity: 0

.arrow
  transform: scaleX(1)
  transition: transform .5s
  &:hover
    color: $primary

.rotate-back
  transform: scaleX(-1)
</style>
