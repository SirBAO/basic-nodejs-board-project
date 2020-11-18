
<template>
  <div class="sidebar-box">
    <SubTitle :title="'titles.recent_comment'" icon="quote" />
    <ul>
      <template v-if="comments.length > 0">
        <li
          class="
            bg-ob-deep-900
            px-2