<script setup lang="ts">
definePageMeta({
  layout: "deceive",
});

useSeoMeta({
  title: "The Skin Archive | Deceive",
  ogTitle: "The Skin Archive | Deceive",
  description:
    "Skin Archive collects and sorts all comsmetics from the stores of your favorite games! Our service is from fans for fans.",
  ogDescription:
    "Skin Archive collects and sorts all comsmetics from the stores of your favorite games! Our service is from fans for fans.",
  ogImage:
    "https://skin-archive.com/images/skin-archive-deceive-logo-card.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="home-deceive-wrapper">
    <div class="home-deceive-logo-wrap">
      <img
        alt="Deceive Archive Logo"
        height="200"
        width="200"
        class="deceive-page-logo-img"
        src="../../assets/images/Deceive/logos/deceive-logo-big-white.webp"
      />
    </div>
    <div class="home-deceive-main-menu-wrap">
      <div class="home-deceive-main-menu-ads-wrap"></div>
      <div class="home-deceive-main-menu-entry">
        <div class="home-deceive-main-menu-entry-agentskins">
          <RouterLink class="home_routerlink" to="/deceive/agentskin-selection">
            <div class="shine">
              <div class="home-deceive-main-menu-entry-top">
                <img
                  alt="Deceive Agent Skins"
                  height="400"
                  width="200"
                  class="deceive-page-menu-img"
                  src="../../assets/images/Deceive/stock/agentskins.webp"
                />
              </div>
              <div class="home-deceive-main-menu-entry-bottom">
                <h3 class="home-deceive-main-menu-entry-bottom-text">
                  Agent Skins
                </h3>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div
        class="home-deceive-main-menu-entry"
        id="home-deceive-main-menu-entry-weaponskins"
      >
        <div class="home-deceive-main-menu-entry-weaponskins">
          <RouterLink class="home_routerlink" to="/deceive/weaponskins">
            <div class="shine">
              <div class="home-deceive-main-menu-entry-top">
                <img
                  alt="Deceive Weapon Skins"
                  id="deceive-weapon-menu-enty-img"
                  height="400"
                  width="200"
                  class="deceive-page-menu-img"
                  src="../../assets/images/Deceive/stock/weapons.jpg"
                />
              </div>
              <div class="home-deceive-main-menu-entry-bottom">
                <h3 class="home-deceive-main-menu-entry-bottom-text">
                  Weapon Skins
                </h3>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div
        class="home-deceive-main-menu-entry"
        id="home-deceive-main-menu-entry-emotes"
      >
        <div class="home-deceive-main-entry-emotes">
          <RouterLink class="home_routerlink" to="/deceive/emotes-selection">
            <div class="shine">
              <div class="home-deceive-main-menu-entry-top">
                <img
                  alt="Deceive Weapon Skins"
                  height="400"
                  width="200"
                  class="deceive-page-menu-img"
                  src="../../assets/images/Deceive/stock/emotes.jpg"
                />
              </div>
              <div class="home-deceive-main-menu-entry-bottom">
                <h3 class="home-deceive-main-menu-entry-bottom-text">
                  Emotes/Cheers
                </h3>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="home-deceive-main-menu-ads-wrap"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes shine {
  0% {
    opacity: 0 !important;
  }
  10% {
    opacity: 1;
  }
  100% {
    left: 125%;
  }
}

.shine {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 100;

  &::before {
    opacity: 0%;
    background: linear-gradient(
      to right,
      fade_out(#fff, 1) 0%,
      fade_out(#fff, 0.7) 100%
    );
    content: "";
    display: block;
    height: 100%;
    left: -75%;
    position: absolute;
    top: 0;
    transform: skewX(-25deg);
    width: 50%;
    z-index: 2;
  }

  &:hover,
  &:focus {
    &::before {
      animation: shine 0.85s;
    }
  }
}
.home-deceive-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
}

.home-deceive-logo-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: auto;
  aspect-ratio: 1/1;
  margin-left: auto;
  margin-right: auto;
}

.home-deceive-main-menu-wrap {
  height: calc(60% - 50px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.deceive-page-logo-img {
  width: 100%;
  object-fit: contain;
  object-position: center;
}

.home-deceive-main-menu-entry {
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  height: 80%;
  aspect-ratio: 1/1.5 !important;
}
.home-deceive-main-menu-ads-wrap {
  width: auto;
  height: 100%;
}

.home-deceive-main-menu-entry-agentskins {
  width: 80%;
  height: 80%;
  cursor: pointer;
  border: 3px solid #141414;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.644);
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}

.home-deceive-main-entry-emotes {
  width: 80%;
  height: 80%;
  cursor: pointer;
  border: 3px solid #141414;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.644);
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}

.home-deceive-main-menu-entry-weaponskins {
  width: 80%;
  height: 80%;
  cursor: pointer;
  border: 3px solid #141414;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.644);
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}

#home-deceive-main-menu-entry-weaponskins {
  justify-content: center;
}

.home-deceive-main-menu-entry-top {
  height: calc(100% - 60px);
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.home-deceive-main-menu-entry-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #141414;
}

.deceive-page-menu-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.deceive-page-logo-img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.home-deceive-main-menu-entry-bottom-text {
  text-align: center;
  display: flex;
  margin-top: 15px;
  color: white;
}

#deceive-weapon-menu-enty-img {
  object-position: 82.5%;
}

.home_routerlink {
  text-decoration: none;
  margin: 0px !important;
  width: 0px !important;
}

@media only screen and (max-width: 800px) {
  .home-deceive-main-menu-wrap {
    height: unset;
    align-items: flex-start;
  }

  .home-deceive-main-menu-ads-wrap {
    width: 0% !important;
    height: 0% !important;
  }

  .home-deceive-main-menu-entry {
    width: 50%;
    height: 50%;
  }
}

@media only screen and (max-width: 500px) {
  .home-deceive-main-menu-ads-wrap {
    width: 0% !important;
  }

  .home-deceive-main-menu-entry {
    width: 100%;
    height: 30%;
  }
}
</style>
