<template>
  <div class="container1">
    <div v-for="(category, index) in this.womenCategories" :key="index">
      <RouterLink :to="`/prod/women/${category}`">{{ category }}</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EnfantCategory",
  data() {
    return {
      womenCategories: [
        "BLAZERS",
        "JACKETS | TRENCH COATS",
        "WAISTCOATS | GILETS",
        "DRESSES | JUMPSUITS",
        "SHIRTS",
        "T-SHIRTS SWEATSHIRTS",
        "TOPS | BODYSUITS",
        "KNITWEAR",
        "TROUSERS",
        "JEANS",
        "SKIRTS",
        "SHORTS",
        "SKORTS",
        "SHOES",
        "BAGS",
        "ACCESSORIES | JEWELLERY",
        "BIKINIS | SWIMSUITS NEW",
        "PERFUMES",
        "BEAUTY",
        "CO-ORD SETS",
        "SUITS",
      ],
    };
  },
};
</script>
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
}
</style>
