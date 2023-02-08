<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="toolbar_">
          JOGOS
        </div>
      </ion-toolbar>
    </ion-header>

    <!--<ion-segment value="all" mode="md" color="danger">
      <ion-segment-button value="all" @click="setTab(0)">
        <ion-label>Todos os Jogos</ion-label>
      </ion-segment-button>
    </ion-segment>-->

    <ion-content :fullscreen="true">

      <div class="slides">
        <ion-slides pager="true" :options="slideOpts">
          <GameItem v-for="(game, idx) in games" :key="idx" :game="game"></GameItem>
        </ion-slides>
      </div>

    </ion-content>

  </ion-page>
</template>

<script setup>
  import { IonPage, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonContent } from '@ionic/vue';
  import { reactive, ref } from "vue";
  import GameItem from "@/components/GameItem.vue";

  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  const activeTab = ref(0);
  const games = reactive([
    {
      title: 'Delivery Master',
      // url: 'https://v6p9d9t4.ssl.hwcdn.net/html/7309862/index.html',
      url: process.env.BASE_URL + 'delivery-master/index.html',
      image: process.env.BASE_URL + 'assets/Splash.png'
    },
  ]);

  const setTab = tab => activeTab.value = tab;
</script>

<style scoped>
.toolbar_ {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .9rem;
}

.slides {
  padding: 1rem;
}
</style>
