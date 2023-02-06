<template>
  <div class="item" @click="goTo()">
    <div class="points">
      <ion-icon :icon="sparklesOutline"></ion-icon>
      <span>{{ props.item.price }}</span>
    </div>
    <div class="image">
      <img :src="props.item.image" alt="">
    </div>
    <strong class="titles">{{title}}</strong>
    <span class="titles">{{subtitle}}</span>
    <div class="qty">
      <ion-icon :icon="giftOutline"></ion-icon>
      <span>152</span>
    </div>
  </div>
</template>

<script setup>
  import { sparklesOutline, giftOutline } from 'ionicons/icons';
  import { IonIcon } from '@ionic/vue';
  import { computed } from "vue";
  import router from "@/router";

  const props = defineProps({ item: Object });
  const title = computed(() => props.item.title.substr(0, 12) + '...');
  const subtitle = computed(() => props.item.description.substr(0, 12) + '...');

  const goTo = () => {
    localStorage.setItem('product', JSON.stringify(props.item));
    router.push(`/tabs/product/${props.item.id}`);
  }
</script>

<style scoped>
.item {
  width: calc(33.333% - .5rem);
  position: relative;
  margin: .25rem;
  margin-bottom: 1rem;
}
.points {
  position: absolute;
  top: .5rem;
  left: .5rem;
  padding: .25rem .5rem;
  background-color: #fff;
  border-radius: 20px;
  font-size: .8rem;
  display: flex;
  align-items: center;
  z-index: 100;
}
.points span {
  margin-left: .25rem;
}
.points ion-icon {
  color: red;
}
.image {
  border-radius: 6px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, .3);
  margin-bottom: .25rem;
  width: 100%;
  height: 30vw;
  background-color: red;
}
.image img {
  border-radius: 6px;
  width: 100%;
  height: 30vw;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.item .titles {
  display: block;
  margin: .25rem 0;
  font-size: .8rem;
}
.item span.titles {
  font-weight: 300;
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
</style>
