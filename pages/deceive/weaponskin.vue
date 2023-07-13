<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import WeaponSkinData from "~/models/Deceive/WeaponSkins/weaponskins.json";
import { type IWeaponSkinsInterface } from "~/interfaces/Deceive/weaponskinsInterface";

definePageMeta({
  layout: "deceive",
});

const selectedSkin: Ref<string> = ref("");
const skindata: Ref<IWeaponSkinsInterface> = ref({
  name: "",
  price: 0,
  rarity: "",
  variant: false,
});
const isLegendary: Ref<boolean> = ref(false);
const isEpic: Ref<boolean> = ref(false);
const isRare: Ref<boolean> = ref(false);
const isUncommon: Ref<boolean> = ref(false);

const isVariant: Ref<boolean> = ref(false);
const isImageLeft: Ref<boolean> = ref(true);
const isImageRight: Ref<boolean> = ref(false);

function getAgentSkinImageUrl(name: string) {
  const dynamicImageUrl = new URL(
    `../../assets/images/Deceive/shopitems/weaponskins/${name}_small.webp`,
    import.meta.url
  ).href;
  return dynamicImageUrl;
}

function getAgentSkinVariantImageUrl(name: string) {
  const dynamicImageUrl = new URL(
    `../../assets/images/Deceive/shopitems/weaponskins/${name}_animation.webp`,
    import.meta.url
  ).href;
  return dynamicImageUrl;
}

function switchImage(direction: string) {
  if (direction == "left") {
    isImageLeft.value = true;
    isImageRight.value = false;
  } else if (direction == "right") {
    isImageLeft.value = false;
    isImageRight.value = true;
  }
}

onMounted(() => {
  console.log("NEW ROUTE: " + window.location.pathname);

  if (window.location.pathname === "/deceive/weaponskin") {
    const searchParams = new URLSearchParams(window.location.search);
    selectedSkin.value = searchParams.get("id") || "";

    if (selectedSkin.value !== "") {
      const agentSkinArray = Object.entries(WeaponSkinData);
      for (const [skinID, skins] of agentSkinArray) {
        if (skinID === selectedSkin.value) {
          skindata.value.name = skins.name;
          skindata.value.price = skins.price;
          skindata.value.rarity = skins.rarity;
          skindata.value.variant = skins.variant;
          selectedSkin.value = skinID;
          if (skindata.value.rarity == "Legendary") {
            isLegendary.value = true;
          } else if (skindata.value.rarity == "Epic") {
            isEpic.value = true;
          } else if (skindata.value.rarity == "Rare") {
            isRare.value = true;
          } else if (skindata.value.rarity == "Uncommon") {
            isUncommon.value = true;
          } else {
            isLegendary.value = false;
            isEpic.value = false;
            isRare.value = false;
            isUncommon.value = false;
          }
          if (skindata.value.variant == true) {
            isVariant.value = true;
          }
        }
      }
    }
  }
});
</script>

<template>
  <div class="deceive-skin-page-wrapper">
    <div class="deceive-skin-page-header-wrapper">
      <div class="deceive-skin-page-header-title-wrapper">
        <h1 class="deceive-skin-page-header-title">{{ skindata.name }}</h1>
      </div>

      <div class="deceive-skin-page-header-agentname-wrapper">
        <h2 class="deceive-skin-page-header-agentname">Weapon Skin</h2>
      </div>
    </div>

    <div class="deceive-skin-page-content-wrapper">
      <div class="deceive-skin-page-content">
        <div class="deceive-skin-page-bigimg-wrapper">
          <div class="deceive-skin-page-bigimg">
            <img
              class="deceive-skin-page-bigimg_left"
              :class="{ active: isImageLeft }"
              :src="getAgentSkinImageUrl(selectedSkin)"
              alt="Deceive Inc Skin Big"
            />
            <img
              v-if="isVariant == true"
              class="deceive-skin-page-bigimg_right"
              :class="{ active: isImageRight }"
              :src="getAgentSkinVariantImageUrl(selectedSkin)"
              alt="Deceive Inc Skin Big"
            />
          </div>
          <div
            class="deceive-skin-page-bigimg-navigator-wrapper"
            :class="{ active: isVariant }"
          >
            <div class="deceive-skin-page-bigimg-navigator">
              <div class="deceive-skin-page-bigimg-button">
                <svg
                  @click="switchImage('left')"
                  height="48"
                  width="100"
                  class="deceive-skin-page-bigimg-button-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path
                    class="lol"
                    d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"
                  />
                </svg>
              </div>
              <div class="deceive-skin-page-bigimg-button">
                <svg
                  @click="switchImage('right')"
                  class="deceive-skin-page-bigimg-button-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                >
                  <path
                    d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="deceive-skin-page-description-wrapper">
          <div class="deceive-skin-page-price-wrapper">
            <h2 class="deceive-skin-page-price">
              Price: {{ skindata.price }}
              <img
                src="../../assets/images/Deceive/stock/bonds.webp"
                class="deceive-skin-page-bonds"
              />
            </h2>
          </div>
          <div class="deceive-skin-page-price-wrapper">
            <h2 class="deceive-skin-page-price">Rarity:&nbsp;</h2>
            <h2
              class="deceive-skin-page-price"
              id="deceive-skin-page-rarity"
              :class="{
                legendarySkin: isLegendary,
                epicSkin: isEpic,
                rareSkin: isRare,
                uncommonSkin: isUncommon,
              }"
            >
              {{ skindata.rarity }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.deceive-skin-page-wrapper {
  height: calc(100% - 60px);
  width: 100%;
}

#deceive-skin-page-rarity {
  &.legendarySkin {
    color: #feb00a !important;
  }
  &.epicSkin {
    color: #e156f4 !important;
  }
  &.rareSkin {
    color: #3875b7 !important;
  }
  &.uncommonSkin {
    color: #56de40 !important;
  }
}
.deceive-skin-page-header-title-wrapper {
  display: flex;
  align-items: flex-end;
  height: 50%;
}

.deceive-skin-page-header-title {
  color: white;
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.863);
}

.deceive-skin-page-header-agentname-wrapper {
  display: flex;
  align-items: center;
  height: 40%;
}

.deceive-skin-page-header-wrapper {
  height: 27.5%;
  width: 90%;
  margin: auto;
}

.deceive-skin-page-content-wrapper {
  height: 70%;
  width: 90%;
  display: flex;

  margin-left: auto;
  margin-right: auto;
}

.deceive-skin-page-content {
  margin-top: 2.5%;
  width: 70%;
  height: 100%;
  display: flex;
}

.deceive-skin-page-header-agentname {
  font-size: var(--fs-bgs);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.815);
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.863);
}

.deceive-skin-page-bigimg-wrapper {
  width: 52.5%;
  margin-bottom: 10%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.deceive-skin-page-bigimg {
  display: flex;
  aspect-ratio: 2/1;
  width: 90%;
  border-radius: 20px !important;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 0px 20px 40px 20px rgba(0, 0, 0, 0.5);
}

.deceive-skin-page-bigimg_left {
  position: relative;
  height: 100%;
  transition: ease-in-out 0.5s;
  object-fit: cover !important;
  aspect-ratio: 2/1;

  &.active {
    left: -0%;
  }
}
.deceive-skin-page-bigimg_right {
  width: 100%;
  position: relative;
  transition: ease-in-out 0.5s;
  left: 0%;

  &.active {
    left: -100%;
  }
}
.deceive-skin-page-description-wrapper {
  width: 100%;
  height: 100%;
}

.deceive-skin-page-price-wrapper {
  display: flex;
  align-items: center;
  height: 15%;
  margin-left: 5rem;
  display: flex;
}

.deceive-skin-page-price {
  display: flex;
  align-items: center;
  font-size: var(--fs-bgs);
  color: white;
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.863);
  text-align: center;
}

.deceive-skin-page-bonds-wrapper {
  display: flex;
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
}

.deceive-skin-page-bonds {
  padding-left: 2.5%;
  width: 15%;
  height: 100%;
  margin-bottom: 2.5% !important;
}

.deceive-skin-page-bigimg-navigator-wrapper {
  height: 100%;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  aspect-ratio: 3/1;

  &.active {
    display: flex;
  }
}

.deceive-skin-page-bigimg-navigator {
  display: flex;
  justify-content: space-around;
  height: 50%;
  width: 60%;
}

.deceive-skin-page-bigimg-button {
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
}

.deceive-skin-page-bigimg-button-svg {
  cursor: pointer;
  display: flex;
  justify-content: center;
  object-position: center;
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
  fill: white;
  transition: ease-in-out 0.3s;
}

.deceive-skin-page-bigimg-button-svg:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 1000px) {
  .deceive-skin-page-content {
    flex-direction: column;
  }

  .deceive-skin-page-description-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 0px !important;
    margin-top: 3rem;
    height: 10rem !important;
  }

  .deceive-skin-page-price-wrapper {
    margin-left: 0px;
  }

  .deceive-skin-page-price-wrapper {
    height: 3rem;
  }

  .deceive-skin-page-bigimg-wrapper {
    height: unset;
    width: 72.5%;
  }
}

@media only screen and (max-width: 700px) {
  .deceive-skin-page-content {
    width: 100%;
  }
}
</style>
