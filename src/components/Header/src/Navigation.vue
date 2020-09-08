<template>
  <nav class="items-center flex-1 hidden lg:flex">
    <ul class="flex flex-row list-none px-6 text-white">
      <li
        class="
          not-italic
          font-medium
          text-xs
          h-full
          relative
          flex flex-col
          items-center
          justify-center
          cursor-pointer
          text-center
          py-4
          px-2
        "
        v-for="route in routes"
        :key="route.path"
      >
        <div
          class="
            nav-link
            text-sm
            block
            px-1.5
            py-0.5
            rounded-md
            relative
            uppercase
            cursor-pointer
          "
          @click="pushPage(route.path)"
          v-if="route.children && route.children.length === 0"
          :data-menu="route.name"
        >
          <span
            class="relative z-50"
            v-if="$i18n.locale === 'cn' && route.i18n.cn"
          >
            {{ route.i18n.cn }}
          </span>
          <span
            class="relative z-50"
            v-else-if="$i18n.locale === 'en' && route.i18n.en"
          >
            {{ route.i18n.en }}
          </span>
          <span class="relative z-50" v-else>{{ route.name }}</span>
        </div>
        <Dropdown
          @command="pushPage"
          hover
          v-else
          class="
            nav-link
            text-sm
            block
            px-1.5
            py-0.5
 