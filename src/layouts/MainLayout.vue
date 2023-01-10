<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="q-dark text-white">
      <q-toolbar>
        <!--        <q-avatar>-->
        <!--          <img :src="'profile_navbar.jpg'" alt="profile" />-->
        <!--        </q-avatar>-->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.dark-header
  background-color: $dark-page
</style>
