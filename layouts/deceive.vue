<script setup lang="ts"></script>

<template>
  <div class="deceive">
    <div class="deceive-header">
      <DeceiveHeader />
    </div>

    <div class="deceive-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.deceive {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.deceive-header {
  height: 60px;
}
.deceive-content {
  height: calc(100% - 60px);
  max-height: calc(100% - 60px);
  width: 100%;
  overflow-y: auto;
}
</style>
