<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="start-grid">

        <StartItem v-for="(item, idx) in items" :key="idx" :item="item" :index="idx"></StartItem>

      </div>

    </ion-content>
  </ion-page>
</template>

<style scoped>
.start-grid {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: .25rem;
}
</style>

<script setup lang="ts">
  import StartItem from '@/components/StartItem.vue';
  import { IonPage, IonContent } from '@ionic/vue';
  import { gameControllerOutline, giftOutline, globeOutline, personOutline, walletOutline } from 'ionicons/icons';
  import { reactive } from 'vue';

  const items = reactive([
    {
      size: 50,
      image: 'https://picsum.photos/200/300?random=1',
      title: 'Coke Screentime',
      link: '/post/0'
    },
    {
      size: 50,
      image: 'https://picsum.photos/200/300?random=2',
      title: 'Vai ao Marvel Avengers',
      link: '/post/1'
    },
    {
      size: 100,
      image: 'https://picsum.photos/600/300?random=3',
      title: 'Prémios',
      subtitle: 'Coca-Cola Screentime x Marvel',
      icon: giftOutline,
      link: '/tabs/products'
    },
    {
      size: 50,
      image: 'https://picsum.photos/200/300?random=4',
      title: 'FAQs',
      subtitle: 'Coke Screentime',
      icon: globeOutline
    },
    {
      size: 50,
      image: 'https://picsum.photos/200/300?random=5',
      title: 'Hero Run',
      subtitle: 'Obter pontos de hero run',
      icon: gameControllerOutline
    },
    {
      size: 100,
      image: 'https://picsum.photos/600/300?random=6',
      title: 'O teu perfil',
      subtitle: 'Personaliza o teu perfil',
      icon: personOutline
    },
    {
      size: 100,
      image: 'https://picsum.photos/600/300?random=7',
      title: 'Carteira',
      subtitle: 'Informação sobre o teu saldo',
      icon: walletOutline
    },
    {
      size: 100,
      image: 'https://picsum.photos/600/300?random=8',
      title: 'Web Coca-Cola',
      subtitle: 'Todas as últimas novidades',
      icon: globeOutline
    },
  ])
</script>
