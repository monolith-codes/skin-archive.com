<script setup lang="ts"></script>

<template>
  <div class="deceive-header-wrapper">
    <div class="deceive-header-left">
      <div class="deceive-header-logos-wrap">
        <div class="deceive-header-logo">
          <RouterLink class="home_routerlink" to="/">
            <img
              alt="Skin Archive Logo"
              height="200"
              width="200"
              class="deceive-page-logo-img"
              src="~/public/images/skin-archive-logo-big.webp"
            />
          </RouterLink>
        </div>
        <div class="deceive-header-seperator"></div>
        <div class="deceive-header-logo">
          <a
            class="home_link"
            target="_blank"
            href="https://www.deceiveinc.com/"
          >
            <img
              alt="Deceive Logo"
              height="200"
              width="200"
              class="deceive-page-logo-img"
              src="~/assets/images/Deceive/logos/deceiveincsmalllogo.webp"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="deceive-header-center"></div>

    <div class="deceive-header-right"></div>
  </div>
</template>

<style scoped lang="scss">
.deceive-header-wrapper {
  display: flex;
  height: 60px;
  width: 100%;
  background-color: #141414;
}

.deceive-header-left {
  display: flex;
  align-items: center;
}

.deceive-header-left,
.deceive-header-right {
  width: 30%;
  height: 100%;
}

.deceive-header-center {
  width: 40%;
  height: 100%;
}

.deceive-header-logos-wrap {
  margin-left: 1rem;
  display: flex;
  height: 70%;
}

.deceive-header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
}

.deceive-header-seperator {
  width: 3px;
  height: 85%;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 5px !important;
  background-color: rgb(99, 99, 99);
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.deceive-page-logo-img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
}

.home_routerlink {
  height: 80%;
  width: 80%;
  margin: 0px !important;
  padding: 0px !important;
  text-decoration: none;
}

.home_link {
  height: 80%;
  width: 80%;
  margin: 0px !important;
  padding: 0px !important;
  text-decoration: none;
}
</style>
