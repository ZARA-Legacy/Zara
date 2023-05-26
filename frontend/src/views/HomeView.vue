<template>
  <div>
    <div class="slider">
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import HommeCategory from "../components/HommeCategory.vue";
import FemmeCategory from "../components/FemmeCategory.vue";
import EnfantCategory from "../components/EnfantCategory.vue";
const currentUser = JSON.parse(window.localStorage.getItem("token"));
console.log("from home ", currentUser);

export default defineComponent({
  data() {
    return {
      sidebarOpen: false,
      hommeShow: "femme",
      activeDiv: 0,
      user: currentUser,
    };
  },
  methods: {
    handleDivClick(index: number): void {
      this.activeDiv = index;
    },
    handleToggleSidebar(): void {
      this.sidebarOpen = !this.sidebarOpen;
      console.log(this.user);
    },
  },
  components: {
    HommeCategory,
    FemmeCategory,
    EnfantCategory,
  },
});
</script>
<style scoped>
.connecte:hover {
  cursor: pointer;
}
.recherche:hover {
  cursor: pointer;
}
.help:hover {
  cursor: pointer;
}
.cart:hover {
  cursor: pointer;
}
.navBar {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.p-5 {
  padding: 1.25rem;
}

.grid {
  display: grid;
}

.gap-1 {
  gap: 0.25rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.left-logos {
  display: flex;
}

.recherche {
  margin-right: 0.25rem;
}

svg {
  width: 25px;
  height: 25px;
}

.bi {
  fill: currentColor;
}

.bi-bag {
  display: inline-block;
  vertical-align: middle;
}

/* Additional styles for the specific logo image */
img[src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"]
{
  max-width: 100%;
  height: auto;
}

.sidebar {
  position: fixed;
  top: 0;
  z-index: 10;
}

img {
  width: 200px;
  height: 90px;
  position: relative;
  right: 20%;
}

.left-logos {
  display: flex;
  gap: 20px;
  position: relative;
  top: -30px;
  font-size: 12px;
  right: 12px;
}

.recherche {
  position: relative;
  right: 20%;
  width: 120px;
  border-bottom: solid 1px #000;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 29.29vw;
  background-color: white;
  opacity: 0.98;
}

.sidebar a {
  display: fixed;
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 12px;
}

.container {
  position: absolute;
  top: 40px;
  left: -200px;
  background: none;
  border: none;
  box-shadow: none;
}

.closeSvg {
  position: relative;
  top: -147px;
  left: -300px;
  opacity: 0.9;
}

.elements {
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: relative;
  top: -100px;
  margin-left: -300px;
  font-size: 12px;
}

.elements:hover {
  cursor: pointer;
}

.homme:hover {
  font-weight: bold;
}

.homme.active {
  font-weight: bold;
  position: relative;
}

.homme.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(43% - 1px); /* Adjust this value to control the width */
  width: 8px; /* Adjust this value to control the thickness */
  height: 1%; /* Adjust this value to control the height */
  background-color: #000;
}

.femme:hover {
  font-weight: bold;
}

.femme.active {
  font-weight: bold;
  position: relative;
}

.femme.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(40% - 1px); /* Adjust this value to control the width */
  width: 8px; /* Adjust this value to control the thickness */
  height: 1%; /* Adjust this value to control the height */
  background-color: #000;
}

.enfants:hover {
  font-weight: bold;
}

.enfants.active {
  font-weight: bold;
  position: relative;
}

.enfants.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(40% - 1px); /* Adjust this value to control the width */
  width: 8px; /* Adjust this value to control the thickness */
  height: 1%; /* Adjust this value to control the height */
  background-color: #000;
}

.beauty:hover {
  font-weight: bold;
}

.beauty.active {
  font-weight: bold;
}

.slider {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  position: relative;
}

.slider .slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: slider 12.5s infinite;
}

.slider .slide:nth-child(3) {
  background-image: url("https://static.zara.net/photos///contents/mkt/spots/ss23-north-beauty-new/subhome-xmedia-16//w/1920/IMAGE-landscape-default-fill-d06d0c41-fb7d-423f-96be-d9a4510cdab8-default_0.jpg?ts=1682077253385");
  animation-delay: -5s;
}

.slider .slide:nth-child(4) {
  background-image: url("https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-summer-camp/subhome-xmedia-19//w/1920/IMAGE-landscape-default-fill-56a3ce33-fa40-4027-8d3e-df9b1f65c531-default_0.jpg?ts=1683615240598");
  animation-delay: -7.5s;
}

.slider .slide:nth-child(5) {
  background-image: url("https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1920/IMAGE-landscape-fill-9efbc54b-6ef8-4aa7-a8c1-78897dbbbf1d-default_0.jpg?ts=1683462393703");
  animation-delay: -10s;
}

.slider .slide:nth-child(6) {
  background-image: url("https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-19//w/1920/IMAGE-landscape-default-fill-c34c147e-b13b-4325-ba47-694c24f30ad9-default_0.jpg?ts=1682077191023");
  animation-delay: -12.5s;
}

.slide-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slider {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  37.5% {
    opacity: 0;
  }
}

.container1 {
  margin-top: 150px;
  position: relative;
  left: 2px;
}

.active {
  display: block;
}

.inactive {
  display: none;
}
/* @import url("./styles.css"); */
</style>
