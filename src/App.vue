<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
  *, body {
    font-family: 'Ubuntu', sans-serif;
    box-sizing: border-box;
  }
</style>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
