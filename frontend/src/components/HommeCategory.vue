<script lang="ts">
    export default {
      name: 'HommeCategory',
      };
    </script>
<template>
  <div class="container1">
    <div><div to="/men">EDITION</div></div>
    <div class="nouveautes"><div to="/men">NOUVEAUTÉS</div></div>
    <div class="lin"><div to="/men">LIN</div></div>
    <div class="crochet"><div to="/men">CROCHET</div></div>
    <div class="basiqeus"><div to="/men">BASIQUES</div></div>
    <div class="costumes"><div to="/men">COSTUMES</div></div>
    <div class="chemises"><div to="/men">CHEMISES</div></div>
    <div class="t-shirts"><div to="/men">T-SHIRTS</div></div>
    <div class="blousons"><div to="/men">BLOUSONS | SURCHEMISES</div></div>
    <div class="pantalons"><div to="/men">PANTALONS</div></div>
    <div class="jeans"><div to="/men">JEANS</div></div>
    <div class="shorts"><div to="/men">SHORTS</div></div>
    <div class="sweats"><div to="/men">SWEATS | HOODIES</div></div>
    <div class="pulls"><div to="/men">PULLS | GILETS</div></div>
    <div class="total-look"><div to="/men">TOTAL LOOK</div></div>
    <div class="polos"><div to="/men">POLOS</div></div>
  </div>
</template>


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
  font-weight: bold;
  cursor: pointer;
}
</style>