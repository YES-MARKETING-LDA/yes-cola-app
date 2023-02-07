<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-x="false" :scroll-y="false">
      <div class="close" @click="close()">x</div>
      <iframe v-if="game" :src="game.url"></iframe>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { IonPage, IonContent } from "@ionic/vue";
  import { onMounted, reactive } from "vue";
  import router from "@/router";

  let game = reactive(null);

  onMounted(() => {
    const tmp = sessionStorage.getItem('game');
    game = tmp ? JSON.parse(tmp) : null;
  });

  const close = () => router.back();
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0;
}
.close {
  position: fixed;
  top: 3vw;
  right: 3vw;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .4);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
}
</style>
