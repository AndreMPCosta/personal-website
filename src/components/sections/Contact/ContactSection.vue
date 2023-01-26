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
      <div class="row items-center justify-center full-width q-pt-lg">
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
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.container
  background-color: $secondary

.changeColor
  transition: transform 300ms ease-in-out
  &:hover
    transform: translateY(-.5rem)

#say-hello:hover
  background-color: rgba(250, 250, 250, .3) !important


div.text-h5
  opacity: .8
</style>
