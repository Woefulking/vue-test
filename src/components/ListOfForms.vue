<script >
import { ref } from 'vue'
import SideBar from '../views/SideBar.vue'
import Form from '../views/Form.vue'

export default {
  data: () => {
    let deleted = ref(false)
    return {
      deleted
    }
  },
  components: {
      SideBar,
      Form,
  },
  methods: {
    goToCreatePage() {
      this.$router.push("/create");
    },
  },
}
</script>

<template>
    <div class="root">
      <div class="header">
        <span class="title">Формы</span>
        <button class='btn' type="button" @click="goToCreatePage()">Создать форму</button>
      </div>
      <SideBar width="434" height="902">
        <div class="options">
            <span>Формы</span>
            <span>Пользователи</span>
        </div>
        <button class="hlwBtn" type="button">Выход</button>
      </SideBar>
      <div class="listOfForms">
        <Form v-for="index in 3" :key="index"/>
      </div>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.root {
  background-color: #F6F6F6;
}

.header{
  position: absolute;
  top: 80px;
  left: 450px;
  width: 825px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.hlwBtn{
  position: absolute;
  top: 779px;
  left: 179px;
  width: 160px;
  height: 50px;
}

.listOfForms{
  position: absolute;
  top: 180px;
  left: 450px; 
}
</style>