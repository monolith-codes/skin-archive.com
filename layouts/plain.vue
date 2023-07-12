<script setup lang="ts"></script>

<template>
  <div class="main-header">
    <MainHeader />
  </div>

  <div class="MainWrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.main-header {
  height: 60px;
  width: 100%;
}

.MainWrapper {
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
