<template>
  <div
    @click.stop.prevent="handleClick"
    class="
      block
      cursor-pointer
      hover:bg-ob-trans
      my-1
      px-4
      py-1
      font-medium
      hover:text-ob-bright
    "
  >
    <slot />
  </