<template>
  <div class="flex flex-col">
    <div class="post-header">
      <Breadcrumbs :current="t(pageType)" />
      <h1 class="post-