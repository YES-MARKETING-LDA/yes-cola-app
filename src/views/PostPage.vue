<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="post-page">
        <div class="close" @click="close()">x</div>
        <img :src="posts[postId].image" alt="">

        <div class="post-content">
          <strong>{{posts[postId].title}}</strong>

          <span>00/00/0000</span>

          <div class="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est ex iste tempore unde! Ex maiores nobis rerum! Assumenda debitis magnam necessitatibus
              pariatur quia sed voluptatibus! Delectus necessitatibus nesciunt odit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est ex iste tempore unde! Ex maiores nobis rerum! Assumenda debitis magnam necessitatibus
              pariatur quia sed voluptatibus! Delectus necessitatibus nesciunt odit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est ex iste tempore unde! Ex maiores nobis rerum! Assumenda debitis magnam necessitatibus
              pariatur quia sed voluptatibus! Delectus necessitatibus nesciunt odit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est ex iste tempore unde! Ex maiores nobis rerum! Assumenda debitis magnam necessitatibus
              pariatur quia sed voluptatibus! Delectus necessitatibus nesciunt odit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est ex iste tempore unde! Ex maiores nobis rerum! Assumenda debitis magnam necessitatibus
              pariatur quia sed voluptatibus! Delectus necessitatibus nesciunt odit?</p>
          </div>
        </div>
      </div>

      <div class="footer">
        <button @click="router.push(posts[postId].buttonLink)">{{posts[postId].buttonText}}</button>
        <button class="play">Jogar</button>
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
  color: #999;
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
</style>

<script setup>
  import { reactive } from "vue";
  import { IonPage, IonContent } from '@ionic/vue';
  import router from "@/router";
  import { mount } from "@vue/test-utils";

  let postId;

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

  mount(() => {
    postId = router.currentRoute.value.params.id
  })

  const close = () => router.back()
</script>
