<template>
  <div class="flex flex-col justify-center items-center">
    <img
      v-if="authorData.avatar !== ''"
      class="diamond-avatar h-28 w-28 shadow-xl m-0"
      :src="authorData.avatar || authorData.logo"
      alt="avatar"
    />
    <ob-skeleton v-else width="7rem" height="7rem" circle />

    <h2 class="text-center pt-4 text-4xl font-semibold text-ob-bright">
      <template v-if="authorData.name">
        {{ auth