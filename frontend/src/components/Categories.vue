<template>
    <div class="mb-3 mt-12 flex w-full justify-center">
        <div>
            <button @click="activeTab = 'men'" :class="{ 'active-tab': activeTab === 'men' }">MEN</button>
            <div v-if="activeTab === 'men'">Content for MEN tab</div>
        </div>
        <div>
            <button @click="activeTab = 'women'" :class="{ 'active-tab': activeTab === 'women' }">WOMEN</button>
            <div v-if="activeTab === 'women'">Content for WOMEN tab</div>
        </div>
        <div>
            <button @click="activeTab = 'kids'" :class="{ 'active-tab': activeTab === 'kids' }">KIDS</button>
            <div v-if="activeTab === 'kids'">Content for KIDS tab</div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeTab = ref('men');

        return {
            activeTab,
        };
    },
};
</script>
  
<style scoped>
.active-tab {
    font-weight: bold;
}
</style>