<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="toolbar">
          <ion-icon :icon="diamondOutline"></ion-icon>
          <span>50</span>
          <ion-icon :icon="cashOutline"></ion-icon>
          <span>0</span>
          <ion-icon :icon="sparklesOutline"></ion-icon>
          <span>70</span>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-segment value="all" mode="md" color="danger">
      <ion-segment-button value="all" @click="setTab(0)">
        <ion-label>Todos os Prémios</ion-label>
      </ion-segment-button>
      <ion-segment-button value="screentime" @click="setTab(1)">
        <ion-label>Screentime</ion-label>
      </ion-segment-button>
    </ion-segment>

    <ion-content>

      <div class="products">
        <ProductItem v-for="(prod, idx) in products.filter(p => activeTab === 0 ? true : p.screentime)" :key="idx" :item="prod"></ProductItem>
      </div>

    </ion-content>

  </ion-page>
</template>

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
.toolbar span:last-child {
  margin-right: 0;
}
.products {
  display: flex;
  padding: .5rem;
  flex-wrap: wrap;
}
</style>

<script setup>
  import { IonPage, IonHeader, IonToolbar, IonIcon, IonContent, IonSegmentButton, IonSegment, IonLabel } from '@ionic/vue';
  import { diamondOutline, sparklesOutline, cashOutline } from 'ionicons/icons';
  import { reactive, ref } from "vue";
  import ProductItem from "@/components/ProductItem.vue";
  import { mount } from "@vue/test-utils";

  const activeTab = ref(0);
  const products = reactive([]);

  const setTab = tab => activeTab.value = tab;

  mount(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          for (const [i, p] of json.entries()) {
            products.push({
              ...p,
              price: Math.round(p.price),
              screentime: i % 2 === 0
            });
          }
        })
  })
</script>
