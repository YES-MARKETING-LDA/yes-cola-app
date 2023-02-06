<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="toolbar">
          JOGOS
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-segment value="all" mode="md" color="danger">
      <ion-segment-button value="all" @click="setTab(0)">
        <ion-label>Todos os Jogos</ion-label>
      </ion-segment-button>
    </ion-segment>

    <ion-content>

      <div class="slides">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide>
            <ion-card mode="ios">
              <img src="https://picsum.photos/500/300">
              <ion-card-header>
                <ion-card-title class="title">game</ion-card-title>
              </ion-card-header>

              <ion-card-content class="card-content">
                <p style="margin-bottom: 1rem">00/00/0000</p>
                <p style="margin-bottom: .6rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda beatae consequuntur cumque dolorem eligendi eos fugit, in iusto labore odio officia
                  possimus rem saepe vel voluptate. Labore, voluptas.</p>
                <p style="margin-bottom: .6rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda beatae consequuntur cumque dolorem eligendi eos fugit, in iusto labore odio officia
                  possimus rem saepe vel voluptate. Labore, voluptas.</p>
                <p style="margin-bottom: .6rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda beatae consequuntur cumque dolorem eligendi eos fugit, in iusto labore .</p>
              </ion-card-content>
            </ion-card>
          </ion-slide>
        </ion-slides>
      </div>

    </ion-content>

  </ion-page>
</template>

<script setup>
  import { IonPage, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonContent } from '@ionic/vue';
  import { ref } from "vue";

  const activeTab = ref(0);
  const setTab = tab => activeTab.value = tab;
</script>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .9rem;
}

.slides {
  padding: 1rem;
}

.slides .title {
  font-size: 1.2rem;
  text-align: left;
}

.slides .card-content {
  min-height: 40vh;
  text-align: left;
  font-size: 1rem;
  font-weight: 300;
}
</style>
