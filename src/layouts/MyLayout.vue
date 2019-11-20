<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
      class="bg-green-9"
      >
        <q-btn
          flat
          dense
          round
          class="bg-green-3"
          style="margin-right: 8px;"
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-div class="q-avatar doc-layout-avatar">
          <div class="q-avatar__content row flex-center overflow-hidden">
            <q-img src="https://image.flaticon.com/icons/svg/1152/1152810.svg"></q-img>
          </div>
        </q-div>
        <q-toolbar-title>
          Copa Luiza Braga
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-light-green-2"
    >
      <q-list>
        <q-item-label header class="text-black">Áres de Interesse</q-item-label>
        <q-item clickable tag="a" href="http://localhost:8080/#/home">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Início</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/oportunidades">
          <q-item-section avatar>
            <q-icon name="thumb_up" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Oportunidades</q-item-label>
            <q-item-label caption>Vagas Disponíveis por Time</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/cronograma">
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cronograma</q-item-label>
            <q-item-label caption>Acompanhe o seu Time</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/estatistica">
          <q-item-section avatar>
            <q-icon name="trending_up" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Estatísticas</q-item-label>
            <q-item-label caption>Dados Futebolísticos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/galeria">
          <q-item-section avatar>
            <q-icon name="photo_library" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Galeria</q-item-label>
            <q-item-label caption>Imagens dos Participantes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://pt-br.facebook.com/salgueiroacpe/">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>Nos Acompanhe no Facebook</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.instagram.com/salgueiroacpe/">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Instagram</q-item-label>
            <q-item-label caption>Siga nosso @Instagram</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-footer elevated class="bg-green-9" style="text-align: center">
        <q-toolbar class="glossy">
          <q-toolbar-title style="font-size: 15px">Copyright © 2019 Arthur Dantas - Todos os direitos reservados </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
