<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="post-page" v-if="game">
        <div class="close" @click="close()">x</div>
        <img :src="game.image" alt="">

        <div class="thumbs">
          <img :src="game.image">
          <img :src="game.image">
          <img :src="game.image">
        </div>

        <div class="post-content">
          <strong>{{game.title}}</strong>

          <span>Último dia: 00/00/0000</span>

          <div class="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est ex iste tempore unde! Ex maiores nobis rerum! Assumenda debitis magnam necessitatibus
              pariatur quia sed voluptatibus! Delectus necessitatibus nesciunt odit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est ex iste tempore unde! Ex maiores nobis rerum! Assumenda debitis magnam necessitatibus
              pariatur quia sed voluptatibus! Delectus necessitatibus nesciunt odit?</p>
          </div>
        </div>
      </div>

      <div class="footer">
        <button class="play" @click="play()">Jogar</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.post-page .close {
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
.post-page img {
  width: 100%;
  height: 90vw;
  object-fit: cover;
}
.post-content {
  padding: 1rem;
  padding-bottom: 80px;
}
.post-content span, .post-content strong {
  display: block;
}
.post-content span {
  color: red;
  padding: 1.2rem 0;
  font-weight: 300;
}
.post-content p {
  margin: 0 0 1.2rem 0;
  font-weight: 300;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 43%, rgba(255,255,255,1) 100%);
  height: 100px;
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer button {
  border-radius: 20px;
  padding: .5rem 1.8rem;
  text-transform: uppercase;
  background-color: transparent;
  color: red;
}
.footer .play {
  background-color: red;
  color: #fff;
}
.thumbs {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
}
.thumbs img {
  width: calc(calc(100vw / 3) - 2rem);
  height: calc(calc(100vw / 2) - 2rem);
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .25);
}
</style>

<script setup>
import { onMounted, reactive } from "vue";
  import { IonPage, IonContent } from '@ionic/vue';
  import router from "@/router";

  let game = reactive(null);

  onMounted(() => {
    const tmp = sessionStorage.getItem('game');
    game = tmp ? JSON.parse(tmp) : null;
  });

  const play = () => router.push(`/playGame`);

  const close = () => router.back()
</script>
