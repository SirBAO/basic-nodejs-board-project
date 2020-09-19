<template>
  <div
    id="Ob-Navigator"
    :class="{
      'Ob-Navigator--open': openNavigator,
      'Ob-Navigator--scrolling': scrolling
    }"
  >
    <transition name="fade-bounce-y" mode="out-in">
      <div
        v-if="!openNavigator && showProgress"
        @click.stop.prevent="handleBackToTop"
        class="Ob-Navigator-btt"
      >
        <div>
          <svg-icon
            class="text-ob-bright stroke-current"
            icon-class="nav-top"
          />
        </div>
        <span class="Ob-Navigator-tips">
          {{ t('settings.tips-back-to-top') }}
        </span>
      </div>
    </transition>

    <div class="Ob-Navigator-ball" @click.stop.prevent="handleNavigatorToggle">
      <div :style="gradient">
        <transition name="fade-bounce-y" mode="out-in">
          <svg-icon
            v-if="openNavigator"
            class="text-base stroke-2"
            icon-class="close"
          />
          <svg-icon v-else-if="!showProgress" icon-class="dots" />
          <span class="text-sm" v-else>{{ progress }}%</span>
        </transition>
      </div>
    </div>

    <ul class="Ob-Navigator-submenu">
      <li
        id="Ob-Navigator-top"
        :style="gradient"
        @click.stop.prevent="handleBackToTop"
      >
        <div>
          <svg-icon
            class="text-ob-bright stroke-current"
            icon-class="nav-top"
          />
        </div>
        <span class="Ob-Navigator-tips">
          {{ t('settings.tips-back-to-top') }}
        </span>
      </li>
      <li
        id="Ob-Navigator-menu"
        :style="gradient"
        @click.stop.prevent="handleOpenMenu"
        v-if="isMobile"
      >
        <div>
          <svg-icon
            class="text-ob-bright stroke-current"
            icon-class="nav-menu"
          />
        </div>
        <span class="Ob-Navigator-tips">
          {{ t('settings.tips-open-menu') }}
        </span>
      </li>
      <li
        id="Ob-Navigator-home"
        :style="gradient"
        @click.stop.prevent="handleGoHome"
      >
        <div>
          <svg-icon
            class="text-ob-bright stroke-current"
            icon-class="nav-home"
          />
        </div>
        <span class="Ob-Navigator-tips">
          {{ t('settings.tips-back-to-home') }}
        </span>
      </li>
      <li
        id="Ob-Navigator-search"
        :style="gradient"
        @click.stop.prevent="handleSearch"
      >
        <div>
          <svg-icon class="text-ob-bright stroke-current" icon-class="search" />
        </div>
        <span class="Ob-Navigator-tips">
          {{ t('settings.tips-open-search') }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app'
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigatorStore } from '@/stores/navigator'
import { useRouter } f