<template>
  <div class="inverted-main-grid py-8 gap-8 box-border">
    <div
      class="
        relative
        overflow-hidden
        h-56
        lg:h-auto
        rounded-2xl
        bg-ob-deep-800
        shadow-lg
      "
    >
      <div
        class="
          ob-gradient-plate
          opacity-90
          relative
          z-10
          bg-ob-deep-900
          rounded-2xl
          flex
          justify-start
          items-end
          px-8
          pb-10
          shadow-md
        "
      >
        <h2 class="text-3xl pb-8 lg:pb-16">
          <p :style="gradientText">EDITOR'S SELECTION</p>
          <span class="relative text-2xl text-ob-bright font-semibold">
            <svg-icon class="inline-block" icon-class="hot" />
            {{ t('home.recommended') }}
          </span>
        </h2>
      </div>
      <span
        class="absolute top-0 w-full h-full z-0"
        :style="gradientBackground"
      />
    </di