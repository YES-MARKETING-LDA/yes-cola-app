<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="start" href="/tabs/start">
          <ion-icon color="dark" :icon="homeOutline" />
          <ion-label color="dark">Início</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="products" href="/tabs/products">
          <ion-icon color="dark" :icon="giftOutline" />
          <ion-label color="dark">Prémios</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="news" href="/tabs/news">
          <ion-icon color="dark" :icon="newspaperOutline" />
          <ion-label color="dark">Novidades</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="games" href="/tabs/games">
          <ion-icon color="dark" :icon="gameControllerOutline" />
          <ion-label color="dark">Jogos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="more" href="/tabs/more">
          <ion-icon color="dark" :icon="menuOutline" />
          <ion-label color="dark">Mais</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, giftOutline, newspaperOutline, gameControllerOutline, menuOutline } from 'ionicons/icons';
</script>
