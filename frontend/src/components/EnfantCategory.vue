<template>
  <div class="container1">
    <div v-for="(category, index) in this.kidsCategories" :key="index">
      <RouterLink class="black" :to="`/prod/kids/${category}`">{{ category }}</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EnfantCategory",
  data() {
    return {
      kidsCategories: [
        "GIRL | 6-14 YEARS",
        "BOY | 6-14 YEARS",
        "BABY GIRL | 9 MONTHS - 6 YEARS",
        "BABY BOY | 9 MONTHS - 6 YEARS",
        "ACCESSORIES | SHOES",
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
