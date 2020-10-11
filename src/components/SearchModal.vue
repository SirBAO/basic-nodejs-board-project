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
                ></path>
              </svg>
            </button>
          </form>
        </header>
        <div
          id="Search-Dropdown"
          class="search-dropdown"
          v-if="
            (searchResults.length > 0 || recentResults.length > 0) && !isEmpty
          "
        >
          <div>
            <section v-if="searchResults.length > 0">
              <div class="search-hit-label">
                {{ searchResultsCount }}
              </div>
              <ul id="search-menu">
                <li
                  v-for="(result, index) in searchResults"
                  :key="result.slug"
                  :class="{
                    'search-hit': true,
                    active: index == menuActiveIndex
                  }"
                  :id="'search-hit-item-' + index"
                >
                  <a href="javascript:void(0)" @click="handleLinkClick(result)">
                    <div class="search-hit-container">
                      <div class="search-hit-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20">
                          <path
                            d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4"
                            stroke="currentColor"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div class="search-hit-content-wrapper">
                        <span
                          class="search-hit-title"
                          v-html="result.content"
                        ></span>
                        <span class="search-hit-path">{{ result.title }}</span>
                      </div>
                      <div class="search-hit-action">
                        <svg
                          class="DocSearch-Hit-Select-Icon"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <g
                            stroke="currentColor"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                            <path d="M8 17l-6-6 6-6"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </section>
            <section v-else>
              <div class="search-hit-label">
                {{ t('settings.recently-search') }}
              </div>
              <ul id="search-menu">
                <li
                  v-for="(result, index) in recentResults"
                  :key="result.slug"
                  :class="{
                    'search-hit': true,
                    active: index == menuActiveIndex
                  }"
                  :id="'search-hit-item-' + index"
                >
                  <a href="javascript:void(0)" @click="handleLinkClick(result)">
                    <div class="search-hit-container">
                      <div class="search-hit-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20">
                          <path
                            d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4"
                            stroke="currentColor"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div class="search-hit-content-wrapper">
                        <span
                          class="search-hit-title"
                          v-html="result.content"
                        ></span>
                        <span class="search-hit-path">{{ result.title }}</span>
                      </div>
                      <div class="search-hit-action">
                        <svg
                          class="DocSearch-Hit-Select-Icon"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <g
                            stroke="currentColor"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                            <path d="M8 17l-6-6 6-6"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div class="search-startscreen" v-else-if="!isEmpty">
          <p>{{ t('settings.no-recent-search') }}</p>
        </div>
        <div class="search-startscreen" v-else>
          <p>{{ t('settings.no-search-result') }}</p>
        </div>
        <div class="search-footer">
          <div class="search-logo">
            <a
              href="https://www.algolia.com/docsearch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="search-label">{{ t('settings.searched-by') }}</span>
              <!-- <svg width="77" height="19" style="color: #5468ff">
              <path
                d="M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.88