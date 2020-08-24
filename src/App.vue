<template>
  <div id="App-Wrapper" :class="[appWrapperClass, theme]" :style="wrapperStyle">
    <div
      id="App-Container"
      class="app-container max-w-10/12 lg:max-w-screen-2xl px-3 lg:px-8"
      @keydown.meta.k.stop.prevent="handleOpenModal"
      tabindex="-1"
      :style="cssVariables"
    >
      <Heade