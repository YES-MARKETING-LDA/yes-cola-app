<template>
  <ion-slide>
    <div class="game-cover" :style="{backgroundImage: `url(${props.game.image})`}">
      <div class="footer">
        <button @click="goDetail()">Detalhes</button>
        <button class="play" @click="play()">Jogar</button>
      </div>
    </div>
  </ion-slide>
</template>

<script setup>
 import { IonSlide } from "@ionic/vue";
 import router from "@/router";

 const props = defineProps({ game: Object })

 const goDetail = () => {
   sessionStorage.setItem('game', JSON.stringify(props.game));
   router.push(`/game`)
 }

 const play = () => {
   sessionStorage.setItem('game', JSON.stringify(props.game));
   router.push(`/playGame`)
 }
</script>

<style scoped>
.game-cover {
  width: 100%;
  height: 70vh;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 12%) 0px 4px 16px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 1rem;
  margin-bottom: 3rem;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5rem;
}
.footer button {
  border-radius: 20px;
  padding: .5rem 1.8rem;
  text-transform: uppercase;
  background-color: #fff;
  color: red;
}
.footer .play {
  background-color: red;
  color: #fff;
}
</style>
