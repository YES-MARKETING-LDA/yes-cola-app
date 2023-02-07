<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="slides">
        <ion-slides pager="true" :options="slideOpts">
          <NewsItem v-for="(slide, idx) in posts" :key="idx" :slide="slide" :index="idx"></NewsItem>
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.slides {
  padding: 1rem;
}
</style>

<script setup>
import { IonPage, IonContent, IonSlides } from '@ionic/vue';
import { reactive } from "vue";
import NewsItem from "@/components/NewsItem.vue";

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const posts = reactive([
  {
    id: 0,
    image: 'https://imageio.forbes.com/specials-images/imageserve/62938bf871383f5110d631af/Avengers-Campus---horizontal--1-/960x0.jpg?format=jpg&width=960',
    title: 'Coke Screentime',
    buttonText: 'Prémios',
    buttonLink: '/'
  },
  {
    id: 1,
    image: 'https://airmagique.files.wordpress.com/2022/08/avengers-campus-paris-flight-force-quinjet-platform.jpg?w=1568',
    title: 'Vai ao Marvel Avengers Campus da Disneyland Paris!',
    buttonText: 'Prémio',
    buttonLink: '/'
  }
])
</script>
