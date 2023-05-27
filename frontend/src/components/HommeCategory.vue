<script lang="ts">
export default {
  name: "HommeCategory",
  data() {
    return {
      menCategories: [
        "SUITS",
        "SHIRTS",
        "T-SHIRTS",
        "JACKETS | OVERSHIRTS",
        "TROUSERS",
        "JEANS",
        "SHORTS",
        "HOODIES | SWEATSHIRTS",
        "SWEATERS | CARDIGANS",
        "TOTAL LOOK",
        "POLO SHIRTS",
        "SWIMWEAR",
        "CARGO | PARACHUTE",
        "BLAZERS",
        "TRENCH COATS",
        "SHOES",
        "BAGS BACKPACKS",
        "ACCESSORIES",
      ],
    };
  },
};
</script>
<template>
  <div class="container1">
    <div v-for="(category, index) in this.menCategories" :key="index">
      <RouterLink :to="`/prod/men/${category}`">{{ category }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container1 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 110px;
  margin-left: 25px;
}

.container1 > div {
  font-size: 12px;
  white-space: nowrap;
}

.container1 > div:hover,
.container1 > div.active {
  font-weight: bold;
  cursor: pointer;
}
</style>
