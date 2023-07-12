<script setup lang="ts"></script>

<template>
  <div class="MainWrapper">
    <slot />
  </div>

  <div class="main-footer">
    <div class="footer-links">
      <RouterLink id="home_routerlink_01" class="home_routerlink" to="/tos">
        <p>Terms of Service</p></RouterLink
      >

      <p>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</p>

      <RouterLink id="home_routerlink_02" class="home_routerlink" to="/privacy">
        <p>Privacy</p></RouterLink
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  color: white;
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
}
.MainWrapper {
  height: calc(100vh - 40px);
  width: 100%;
}

h4 {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.301);
  transition: ease-in-out 0.3s;

  &:hover {
    color: white;
  }
}

.main-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #111111;
}

.home_routerlink {
  justify-content: center;
  align-items: center;
  height: 100%;
}

.footer-links-divider {
  width: 50px;
}

#home_routerlink_01 {
  justify-content: flex-end;
}

#home_routerlink_02 {
  justify-content: flex-start;
}

.footer-links {
  height: 100%;
  display: flex;
  justify-content: center;
}

.home_routerlink {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>
