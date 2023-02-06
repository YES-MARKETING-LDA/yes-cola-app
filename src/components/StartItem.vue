<template>
  <div class="box" :class="sizeClass" :style="image" @click="goTo()">
    <div class="gradient">
      <ion-icon :icon="props.item.icon || megaphoneOutline"></ion-icon>
      <strong>{{title}}</strong>
      <span>{{subtitle || ''}}</span>
    </div>
  </div>
</template>

<style scoped>
.box {
  border-radius: 6px;
  background-color: #666;
  margin: .25rem;
  position: relative;
  background-position: center;
  background-size: cover;
}
.gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 83%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  padding: 1rem;
}
.gradient ion-icon {
  font-size: 1.5rem;
}
.gradient span, .gradient strong {
  display: block;
  margin-top: .6rem;
  font-size: .85rem;
}
.box-50 {
  width: calc(50% - .5rem);
  height: calc(50vw - 1rem);
}
.box-100 {
  width: 100%;
  height: calc(50vw - 1rem);
}
</style>

<script setup>
  import { computed } from "vue";
  import { IonIcon } from '@ionic/vue'
  import { megaphoneOutline } from "ionicons/icons";
  import router from "@/router";

  const props = defineProps({ item: Object, index: Number })
  const sizeClass = computed(() => `box-${props.item.size}`)
  const image = computed(() => ({ backgroundImage: `url(${props.item.image})` }))
  const title = computed(() => props.item.title.substr(0, 21))
  const subtitle = computed(() => (props.item.subtitle || '').substr(0, 23))

  const goTo = () => router.push(props.item.link)
</script>

