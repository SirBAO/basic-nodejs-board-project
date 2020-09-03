<template>
  <div
    class="ob-dropdown relative z-50"
    @click="toggle"
    @mouseover="hoverHandler"
    @mouseleave="leaveHandler"
    v-click-away="onClickAway"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, toRefs, watch } from 'vue'
import { useDropdownStore } from '@/stores/dropdown'
import { useCommonStore } from '@/stores/common'

export default defineComponent({
  emits: ['command'],
  name: 'ObDropdown',
  props: {
    hover: {
      type: Boolean,
      default: 