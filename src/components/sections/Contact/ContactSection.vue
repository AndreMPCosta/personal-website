<template>
  <div class="row items-center justify-center full-width q-py-lg container">
    <div class="row justify-center">
      <div class="text-h5 text-center full-width q-pb-lg q-px-md">
        Life is a journey, enjoy the ride,<br />
        and don't forget to make a difference along the way.
      </div>
      <div class="row items-center justify-center full-width q-py-lg">
        <div
          class="text-h6 text-center col-auto q-pr-lg"
          :style="{ paddingBottom: $q.screen.gt.xs ? 0 : '1rem' }"
        >
          Interested in working together?
        </div>
        <q-btn
          id="say-hello"
          color="white"
          outline
          label="Say Hello"
          size="lg"
          href="mailto:contact@andrecosta.eu"
          target="_blank"
        />
      </div>
      <div class="row items-center justify-evenly full-width q-pt-md">
        <div class="col-sm-auto col-xs-12 items-center">
          <div class="row items-center justify-center">
            <q-btn
              round
              flat
              icon="eva-github-outline"
              size="md"
              href="https://github.com/AndreMPCosta"
              class="changeColor"
              target="_blank"
            />
            <q-btn
              round
              flat
              icon="eva-linkedin-outline"
              size="md"
              class="changeColor"
              href="https://linkedin.com/in/andrempcosta/"
              target="_blank"
            />
            <q-btn
              round
              flat
              icon="eva-email-outline"
              size="md"
              class="changeColor"
              href="mailto:contact@andrecosta.eu"
              target="_blank"
            />
          </div>
        </div>
        <div class="col-sm-auto col-xs-12">
          <a
            class="row items-center justify-center q-py-md"
            href="https://github.com/AndreMPCosta/personal-website"
            target="_blank"
          >
            <div
              class="text-overline text-center col-auto text-uppercase q-pr-sm effect-shine"
            >
              <div>Handcrafted by André Costa</div>
              <q-icon size="sm" name="fork_right" />
              <span class="q-pr-md">{{ forks }}</span>
              <q-icon size="sm" name="star_outline" />
              <span>{{ stars }}</span>
            </div>
          </a>
        </div>
        <div class="row">
          <div class="text-overline text-center col-auto q-pr-md">
            Powered by
          </div>
          <a href="https://vuejs.org" target="_blank">
            <q-img
              fit="fill"
              alt="vue"
              src="/technologies/vue.svg"
              width="42px"
              height="42px"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

interface Props {
  username: string;
}

const props = defineProps<Props>();

const stars = ref<number>(0);
const forks = ref<number>(0);

onMounted(() => {
  getGithubInfo().then();
});

async function getGithubInfo() {
  const response = await axios.get(
    `https://api.github.com/repos/${props.username}/personal-website`
  );
  stars.value = response.data.stargazers_count;
  forks.value = response.data.forks;
}
</script>

<style scoped lang="sass">
.container
  background-color: var(--q-primary)

.changeColor
  transition: transform 300ms ease-in-out
  &:hover
    transform: translateY(-.2rem)

#say-hello:hover
  background-color: rgba(250, 250, 250, .3) !important

div.text-h5
  opacity: .7

/* effect-shine */
.effect-shine
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  display: block
  padding: 1px
  position: relative
  z-index: 2
  text-decoration: none
  color: #2C3E50
  box-sizing: border-box
  font-weight: 600
  -webkit-user-select: none
  -webkit-touch-callout: none

.effect-shine:hover
  color: #fff
  -webkit-transition: color 1s ease
  -moz-transition: color 1s ease
  -ms-transition: color 1s ease
  -o-transition: color 1s ease
  transition: color 1s ease
  cursor: pointer

.effect-shine:hover:after,
.effect-shine:focus:after
  width: 100%
  background-color: #fff
</style>
