<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: "The Skin Archive | Home",
  ogTitle: "The Skin Archive | Home",
  description:
    "Skin Archive collects and sorts all comsmetics from the stores of your favorite games! Our service is from fans for fans.",
  ogDescription:
    "Skin Archive collects and sorts all comsmetics from the stores of your favorite games! Our service is from fans for fans.",
  ogImage: "https://skin-archive.com/images/skin-archive-logo-card.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="home-page-wrapper">
    <div class="home-page">
      <div class="home-page-logo-wrapper">
        <div class="home-page-logo">
          <img
            alt="Skin Archive Logo"
            height="200"
            width="200"
            class="home-page-logo-img"
            src="~/public/images/skin-archive-logo-big.webp"
          />
        </div>
      </div>
      <div class="home-page-info-wrapper">
        <div class="home-page-title-wrap">
          <h1 class="home-page-title">THE SKIN ARCHIVE</h1>
        </div>
        <div class="home-page-description-wrap">
          <h2 class="home-page-description">
            We archive all skins from your favourite games!
          </h2>
        </div>
        <div class="home-page-supported-games-wrap">
          <div class="home-page-supported-games-title-wrap">
            <h3 class="home-page-supported-games-title">Supported Games:</h3>
          </div>
          <div class="home-page-supported-games-box-wrap">
            <div
              class="home-page-supported-games-box"
              id="supported-game-deceive"
            >
              <RouterLink class="home_routerlink" to="/deceive">
                <img
                  alt="Deceive Inc Logo"
                  height="200"
                  width="200"
                  class="home-page-supported-game-img"
                  src="~/assets/images/Deceive/logos/deceiveincsmalllogo.webp"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes logo1 {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

.home-page-wrapper {
  width: 100%;
  height: 100%;
}

.home-page {
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.home-page-logo-wrapper {
  display: flex;
  justify-content: center;
  height: 35%;
  width: 100%;
}

.home-page-info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center !important;
  justify-content: flex-start !important;
  height: 60%;
  width: 100%;
}

.home-page-title-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
  position: relative;
  min-height: 5rem;
}

.home-page-description-wrap {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 20%;
  width: 100%;
}

.home-page-description {
  color: rgba(255, 255, 255, 0.808);
  font-size: 300;
  text-align: center;
}

.home-page-supported-games-wrap {
  height: 30%;
  width: 100%;
}

.home-page-supported-games-title-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
}
.home-page-supported-games-title {
  color: rgba(255, 255, 255, 0.819);
}

.home-page-supported-games-box-wrap {
  display: flex;
  justify-content: center;
  height: 70%;
  width: auto;
}

.home-page-supported-games-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
}

.home-page-supported-game-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 30%;
  transition: ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
}

.home-page-title {
  color: white;
  text-align: center;
}

.home-page-logo {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: auto;
  aspect-ratio: 1 / 1;
}

.home-page-logo-img {
  position: relative;
  width: 60%;
  height: 60%;
  transition: ease-in-out;
  animation: logo1 6s ease-in-out infinite;
}

.home_routerlink {
  width: 50%;
  height: 50%;
  text-decoration: none;
}

@media only screen and (max-width: 500px) {
  .home-page-info-wrapper {
    width: 80%;
    margin: auto;
  }

  .home-page-logo-img {
    top: 0%;
  }
}
</style>
