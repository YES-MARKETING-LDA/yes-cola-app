<template>
  <ion-slide @click="router.push(`/post/${props.index}`)">
    <ion-card mode="ios">
      <img :src="props.slide.image">
      <ion-card-header>
        <ion-card-title class="title">{{ props.slide.title }}</ion-card-title>
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
</template>

<script setup>
  import { IonSlide, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
  import router from "@/router";

  const props = defineProps({ slide: Object, index: Number })
</script>

<style scoped>
.title {
  font-size: 1.2rem;
  text-align: left;
}

.card-content {
  min-height: 40vh;
  text-align: left;
  font-size: 1rem;
  font-weight: 300;
}
</style>
