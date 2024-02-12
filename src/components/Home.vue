<script setup>
import SideBar from '../views/SideBar.vue'
import Login from '../views/Login.vue'
</script>

<template>
    <div class="root">
      <SideBar width="624" height="902" back="white">
        <Login/>
      </SideBar>
    </div>
</template>

<style scoped>
.root {
  background: url(../assets/img/background.png) no-repeat;
}
</style>