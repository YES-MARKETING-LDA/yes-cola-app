<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="slides">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide v-for="(slide, idx) in posts" :key="idx" @click="router.push(`/post/${idx}`)">
            <ion-card mode="ios">
              <img :src="slide.image">
              <ion-card-header>
                <ion-card-title class="title">{{ slide.title }}</ion-card-title>
              </ion-card-header>

              <ion-card-content class="card-content">
                <p style="margin-bottom: 1rem">00/00/0000</p>
                <p style="margin-bottom: .6rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda beatae consequuntur cumque dolorem eligendi eos fugit, in iusto labore odio officia
                  possimus rem saepe vel voluptate. Labore, voluptas.</p>
                <p style="margin-bottom: .6rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda beatae consequuntur cumque dolorem eligendi eos fugit, in iusto labore odio officia
                  possimus rem saepe vel voluptate. Labore, voluptas.</p>
                <p style="margin-bottom: .6rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda beatae consequuntur cumque dolorem eligendi eos fugit, in iusto labore .</p>
              </ion-card-content>
            </ion-card>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.slides {
  padding: 1rem;
}

.slides .title {
  font-size: 1.2rem;
  text-align: left;
}

.slides .card-content {
  min-height: 40vh;
  text-align: left;
  font-size: 1rem;
  font-weight: 300;
}
</style>

<script setup>
import { IonPage, IonContent, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { reactive } from "vue";
import router from "@/router";

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
