<template>
  <div class="deceive-skin-list-header-wrapper">
    <div class="deceive-skin-list-header-title-wrapper">
      <h1 class="deceive-skin-list-header-title">Weapon Skins</h1>
    </div>

    <div class="deceive-skin-list-header-agentname-wrapper">
      <h2 class="deceive-skin-list-header-agentname">All</h2>
    </div>
  </div>

  <div class="deceive-skin-list-wrapper">
    <div
      class="deceive-skin-list-entry-wrapper"
      v-for="item of skinlist.skinid"
      :key="item"
    >
      <div class="deceive-skin-list-entry">
        <RouterLink
          class="home_routerlink"
          :to="GenerateAgentSkinRouterLink(item)"
        >
          <div class="shine">
            <img
              class="deceive-skin-list-img"
              :src="getAgentSkinListImageUrl(item)"
              alt="Skin Image"
            />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import WeaponSkinData from "~/models/Deceive/WeaponSkins/weaponskins.json";
import { type IWeaponSkinsListInterface } from "~/interfaces/Deceive/weaponskinsInterface";

definePageMeta({
  layout: "deceive",
});

useSeoMeta({
  title: "SA | Deceive | Weaponskins",
  ogTitle: "SA | Deceive | Weaponskins",
  description:
    "Skin Archive collect and sort all the comsmetics from the shops of your favourite games! Our service is from fans to fans.",
  ogDescription:
    "Skin Archive collect and sort all the comsmetics from the shops of your favourite games! Our service is from fans to fans.",
  ogImage: "https://skin-archive.com/images/skin-archive-logo-card.webp",
  twitterCard: "summary_large_image",
});

const skinlist: Ref<IWeaponSkinsListInterface> = ref({ skinid: [] });

function GenerateAgentSkinRouterLink(item_in: string) {
  const returnRouterLink = "/deceive/weaponskin?id=" + item_in;

  return returnRouterLink;
}

function getAgentSkinListImageUrl(name: string) {
  const dynamicImageUrl = new URL(
    `../../assets/images/Deceive/shopitems/weaponskins/${name}_small.webp`,
    import.meta.url
  ).href;
  return dynamicImageUrl;
}

onMounted(() => {
  console.log("NEW ROUTE: " + window.location.pathname);

  console.log(WeaponSkinData);

  skinlist.value.skinid = Object.keys(WeaponSkinData);

  console.log(skinlist);
});
</script>

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
  position: relative;
  overflow: hidden;
  height: 80%;
  width: 80%;
  cursor: pointer;
  transition: ease-in-out 0.3s;
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.63);

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
    transform: scale(1.05);

    &::before {
      animation: shine 0.85s;
    }
  }
}
.deceive-skin-list-wrapper {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}

.deceive-skin-list-entry-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  aspect-ratio: 2/1;
  min-width: 300px;
  margin-bottom: 2rem;
}

.deceive-skin-list-entry {
  display: flex;
  justify-content: center;
  align-items: center;
}

.deceive-skin-list-img {
  height: 100%;
  width: 100%;
  position: relative;
  max-width: 600px;
  transition: ease-in-out 0.3s;
  object-fit: cover;
  object-position: center;
}

.deceive-skin-list-header-title-wrapper {
  display: flex;
  align-items: flex-end;
  height: 50%;
}

.deceive-skin-list-header-title {
  color: white;
}

.deceive-skin-list-header-agentname-wrapper {
  display: flex;
  align-items: center;
  height: 40%;
}

.deceive-skin-list-header-wrapper {
  height: 25%;
  width: 90%;
  margin: auto;
}

.deceive-skin-list-header-agentname {
  font-size: var(--fs-bgs);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.815);
}

@media only screen and (max-width: 900px) {
  .deceive-skin-list-entry-wrapper {
    width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  .deceive-skin-list-entry-wrapper {
    width: 100%;
  }
}
</style>
