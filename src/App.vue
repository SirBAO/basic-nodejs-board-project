<template>
  <div id="App-Wrapper" :class="[appWrapperClass, theme]" :style="wrapperStyle">
    <div
      id="App-Container"
      class="app-container max-w-10/12 lg:max-w-screen-2xl px-3 lg:px-8"
      @keydown.meta.k.stop.prevent="handleOpenModal"
      tabindex="-1"
      :style="cssVariables"
    >
      <HeaderMain />
      <div class="app-banner app-banner-image" :style="headerImage" />
      <div class="app-banner app-banner-screen" :style="headerBaseBackground" />
      <div class="relative z-10">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide-y" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <div id="loading-bar-wrapper" :class="loadingBarClass"></div>
  </div>
  <Footer :style="cssVariables" />
  <div class="App-Mobile-sidebar" v-if="isMobile">
    <div id="App-Mobile-Profile" class="App-Mobile-wrapper">
      <MobileMenu />
    </div>
  </div>
  <Navigator />
  <Dia v-if="!isMobile && configReady" />
  <teleport to="head">
    <title>{{ title }}</title>
  </teleport>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
  watch
} from 'vue'
import { useAppStore } from '@/stores/app'
import { useCommonStore } from '@/stores/common'
import { useMetaStore } from '@/stores/meta'
import { useSearchStore } from './stores/search'
import HeaderMain from '@/components/Header/src/Header.vue'
import Footer from '@/components/Footer.vue'
import Navigator from '@/components/Navigator.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import Dia from '@/components/Dia.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderMain,
    Footer,
    Navigator,
    MobileMenu,
    Dia
  },
  setup() {
    const appStore = useAppStore()
    const commonStore = useCommonStore()
    const metaStore = useMetaStore()
    const searchSto