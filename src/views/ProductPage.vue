<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="router.back()">
            <ion-icon :icon="chevronBackOutline"></ion-icon>
          </ion-button>
        </ion-buttons>

        <div class="toolbar">
          <ion-icon :icon="sparklesOutline"></ion-icon>
          <span>70</span>
        </div>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="walletOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="image">
        <img :src="product.image" alt="">
        <div class="points">
          <ion-icon :icon="sparklesOutline"></ion-icon>
          <span>{{ product.price }}</span>
        </div>
      </div>

      <div class="text">
        <div class="title">
          <div class="left">
            <strong>{{product.title}}</strong>
            <span>{{product.title}}</span>
          </div>
          <button>
            <ion-icon :icon="arrowDownOutline"></ion-icon>
          </button>
        </div>

        <div class="qty">
          <ion-icon :icon="giftOutline"></ion-icon>
          <span>152</span>
        </div>

        <div class="desc">{{product.description}}</div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
  import { IonPage, IonHeader, IonButtons, IonButton, IonToolbar, IonIcon } from '@ionic/vue';
  import { chevronBackOutline, walletOutline, sparklesOutline, arrowDownOutline, giftOutline } from 'ionicons/icons'
  import router from "@/router";
  import { reactive } from "vue";
  import { mount } from "@vue/test-utils";

  let product = reactive({})

  mount(() => {
    const prod = JSON.parse(localStorage.getItem('product'));
    product = prod;
  })
</script>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.toolbar ion-icon {
  margin: 0 .5rem;
  font-size: 1rem;
  color: red;
}
.toolbar span {
  font-size: .8rem;
  margin-right: .7rem;
}

.image {
  position: relative;
  background-color: rgba(255, 0, 0, 0.99);
}
.image img {
  width: 100vw;
  height: 100vw;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.points {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: .5rem 1rem;
  background-color: #fff;
  border-radius: 20px;
  font-size: .95rem;
  display: flex;
  align-items: center;
}
.points span {
  margin-left: .25rem;
}
.points ion-icon {
  color: red;
}

.text {
  padding: 1rem;
}
.title {
  display: flex;
  align-items: center;
}
.title .left {
  flex-grow: 1;
}
.title .left strong, .title .left span {
  display: block;
  margin: .25rem 0;
}
.title .left span {
  font-weight: 300;
  font-size: .9rem;
}
.title button {
  border-radius: 20px;
  padding: .5rem 1rem;
  background-color: red;
  color: #fff;
  font-size: 1.1rem;
}

.qty {
  margin-top: .5rem;
  font-size: .8rem;
  color: red;
  display: flex;
  align-items: center;
}
.qty span {
  margin-left: .25rem;
}

.desc {
  margin-top: 1rem;
  font-weight: 300;
  font-size: .9rem;
  line-height: 1.3rem;
}
</style>
