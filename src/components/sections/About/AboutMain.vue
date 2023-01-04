<template>
  <div class="row q-pt-lg justify-center">
    <div class="col-lg-8 col-xs-12 text-body2">
      As a software engineer with a background in biomedical engineering,
      I bring a unique perspective to my work in the tech industry.
      My experience in both fields has given me a strong foundation in both
      technical and problem-solving skills. I have a passion for using technology
      to improve healthcare and make a positive impact on people's lives.
      <br>
      <br>
      In my free time, I enjoy staying up to date with the latest developments
      in both the biomedical and tech industries, and working on personal
      projects that combine my interests in healthcare and software development.
      Overall, I am a driven and dedicated engineer, with a strong work ethic
      and a desire to make a difference through my work.
    </div>
    <div
      class="col-lg-4"
      :style="$q.screen.gt.md ? { paddingLeft: '48px' } : { paddingTop: '48px' }"
    >
      <q-avatar size="256px">
        <img :src="'profile_cropped.jpg'" alt="profile" />
      </q-avatar>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
div
  color: $slate
</style>
