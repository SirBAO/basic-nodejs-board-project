<template>
  <div
    v-if="openModal"
    id="search-modal"
    @keydown.esc="handleStatusChange(false)"
    @keydown.meta.k.stop.prevent="handleStatusChange(false)"
    @keydown.arrow-up.stop.prevent="handleArrowUp"
    @keydown.arrow-down.stop.prevent="handleArrowDown"
    @keydown.enter.stop.prevent="handleEnterDown"
    @click.self="handleStatusChange(false)"
    tabindex="-1"
  >
    <transition name="fade-bounce-pure-y" mode="out-in">
      <div class="search-container" v-if="openSearchContainer">
        <header class="flex pt-4 pr-4 pl-4">
          <form class="search-form" action="">
            <label
              id="search-label"
              class="items-center flex justify-center"
              for="search-input"
            >
              <svg
                class="text-ob fill-current stroke-current"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-reactroot=""
              >
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1"
                  stroke=""
                  d="M15.9996 15.2877L15.2925 15.9948L21.2958 21.9981L22.0029 21.291L15.9996 15.2877Z"
                ></path>
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1"
                  stroke=""
                  fill="rgba(0,0,0,0)"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                ></path>
              </svg>
            </label>
            <input
              type="search"
              id="search-input"
              ref="searchInput"
              class="search-input"
              autocomplete="off"
              v-model="keyword"
              @input="searchKeyword"
            />
            <button
              v-show="keyword.length > 0"
              class="search-btn"
              type="reset"
              title="Clear the query"
              @click="handleResetInput"
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                  stroke="currentColor"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
         