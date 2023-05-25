<template>
  <div class="container1">
    <div><div>COLONIES DE VACANCESNEW</div></div>
    <div><div>TRUE NEUTRALSNEW</div></div>
    <div><div>FILLE | 6-14 ANS</div></div>
    <div><div>GARÇON | 6-14 ANS</div></div>
    <div><div>BÉBÉ FILLE | 9 MOIS - 6 ANS</div></div>
    <div><div>BÉBÉ GARÇON | 9 MOIS - 6 ANS</div></div>
    <div><div>ACCESSOIRES | CHAUSSURES</div></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EnfantCategory',
};
</script>
<style scoped>
.container1 {
  display: flex;
  flex-direction: column;
  gap:12px;
  margin-top: 110px;
  margin-left: 25px;

}

.container1 > div {
  font-size: 12px;
  white-space: nowrap;
}

.container1 > div:hover,
.container1 > div.active {
  font-weight: bold
}
</style>
