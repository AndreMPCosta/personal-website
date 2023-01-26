<template>
  <q-card square class="customCard">
    <q-item>
      <q-item-section avatar>
        <q-avatar><img :src="imageSrc" :alt="`image_${title}`" /></q-avatar>
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
          class="arrow"
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
        <slot v-if="project.slot">
          <component :is="project.slot"></component>
        </slot>
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
          <q-btn color="grey" flat @click="toggleExpanded">
            <div class="fit row items-center no-wrap changeColor">
              <div class="text-overline q-pr-xs changeColor">Stack</div>
              <q-icon right name="eva-chevron-up-outline" v-if="expanded" />
              <q-icon right name="eva-chevron-down-outline" v-if="!expanded" />
            </div>
          </q-btn>
        </div>
      </q-card-actions>

      <transition
        appear
        enter-active-class="animated slideInDown"
        leave-active-class="animated fadeOut"
      >
        <div class="expanded-actions" v-show="expanded">
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
      </transition>
    </div>

    <div ref="back" class="backCard flip-left-in">
      <q-item-section v-if="!backFace">
        <div class="row justify-center">
          <navigation-dots
            :slides="Array.from(Array(backImages.length).keys())"
            :active-slide="slide"
            @changedActiveSlide="changeSlide"
          />
        </div>
      </q-item-section>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        height="104%"
      >
        <q-carousel-slide
          v-for="(img, index) in backImages"
          :key="index"
          :name="index"
          :style="{ padding: 0 }"
        >
          <q-img
            :alt="subtitle"
            :src="img"
            :width="$q.screen.gt.xs ? '460px' : '320px'"
            fit="scale-down"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { Project } from 'src/models/Project';
import { reactive, ref } from 'vue';
import TechIcon from 'components/ui/TechIcon.vue';
import { QBtn, useQuasar } from 'quasar';
import NavigationDots from 'components/ui/NavigationDots.vue';

interface Props {
  project: Project;
}

const props = defineProps<Props>();
const { imageSrc, title, subtitle, stack, github, homepage, backImages } =
  reactive(props.project);

const q = useQuasar();

const arrow = ref<QBtn | null>(null);
const front = ref<HTMLElement | null>(null);
const back = ref<HTMLElement | null>(null);
const actions = ref<HTMLElement | null>(null);
const backFace = ref<boolean>(true);
const expanded = ref<boolean>(false);
const slide = ref<number>(0);
const minHeight = ref<string>('561px');
const mobileOffset = ref<string>('0');
const animationDuration = '.7s';

const enum Sides {
  Back,
  Front,
}

function changeSlide(value: number) {
  slide.value = value;
}

function toggleExpanded() {
  expanded.value = !expanded.value;
  if (expanded.value) {
    minHeight.value = '634px';
    mobileOffset.value = '58px';
  } else {
    minHeight.value = '561px';
    mobileOffset.value = '0';
  }
}

function resizeFrontCard(side: Sides) {
  if (side === Sides.Back) {
    minHeight.value = '538px';
  } else {
    minHeight.value = '561px';
  }
}

function flip() {
  if (backFace.value) {
    if (expanded.value) toggleExpanded();
    if (q.screen.lt.sm) resizeFrontCard(Sides.Back);
    front.value?.classList.remove('flip-left-out');
    back.value?.classList.remove('flip-left-in');
    front.value?.classList.add('flip-left-out--active');
    back.value?.classList.add('flip-left-in--active');
    actions.value?.classList.remove('animate-fadeIn');
    arrow.value?.$el.classList.add('rotate-back');
  } else {
    if (q.screen.lt.sm) resizeFrontCard(Sides.Front);
    front.value?.classList.add('flip-left-out');
    back.value?.classList.add('flip-left-in');
    front.value?.classList.remove('flip-left-out--active');
    back.value?.classList.remove('flip-left-in--active');
    actions.value?.classList.add('animate-fadeIn');
    arrow.value?.$el.classList.remove('rotate-back');
  }
  backFace.value = !backFace.value;
}
</script>

<style scoped lang="sass">
.customCard
  width: 460px
  min-height: 724px
  // 748

  @media (max-width: $breakpoint-xs-max)
    width: 320px
    min-height: v-bind(minHeight)
    -moz-transition: v-bind(animationDuration)
    -ms-transition: v-bind(animationDuration)
    -o-transition: v-bind(animationDuration)
    -webkit-transition: v-bind(animationDuration)
    transition: v-bind(animationDuration)
//610

.backCard
  position: absolute
  left: 0
  top: 75px
  width: 460px
  height: 600px

  @media (max-width: $breakpoint-xs-max)
    width: 320px
    height: 415px

.header-subtitle
  color: $slate !important

.changeColor:hover
  color: var(--q-primary)

.flip-left-out
  transition: all 1s ease-out
  backface-visibility: hidden

.flip-left-in
  transition: all 1s ease-out
  backface-visibility: hidden
  transform: perspective(400px) rotateY(180deg)

.flip-left-out--active
  //min-height: 500px
  transform: perspective(400px) rotateY(-180deg)
  backface-visibility: hidden
  transition: all 1s ease-out

.flip-up-in--active
  //max-height: 500px
  transform: perspective(400px) rotateX(0)
  backface-visibility: hidden
  transition: all 1s ease-out

.actions
  position: absolute
  bottom: 58px
  width: 100%
  @media (max-width: $breakpoint-xs-max)
    position: absolute
    bottom: v-bind(mobileOffset)
    -moz-transition: v-bind(animationDuration)
    -ms-transition: v-bind(animationDuration)
    -o-transition: v-bind(animationDuration)
    -webkit-transition: v-bind(animationDuration)
    transition: v-bind(animationDuration)

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
    color: var(--q-primary)

.rotate-back
  transform: scaleX(-1)
</style>
