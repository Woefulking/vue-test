<script setup>
import Previe from '../views/Previe.vue'
</script>

<template>
    <div class="root">
        <Previe class="previe"/>
    </div>
</template>

<style scoped>
.root {
  background: url(../assets/img/background.png) no-repeat;
}

.previe{
  position: absolute; 
  left: 100px;
}
</style>