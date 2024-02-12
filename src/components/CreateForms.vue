<script>
import SideBar from '../views/SideBar.vue'
import Field from '../views/Field.vue'
import Previe from '../views/Previe.vue'
import { useItemsStore } from '@/stores/items'

export default {
  data() {
    const itemsStore = useItemsStore();
    return {
      itemsStore
    }
  },
  components: {
      SideBar,
      Field,
      Previe
  },
  methods: {
    goToPreviePage() {
      this.$router.push("/previe");
    },
    goToFormsListPage(){
      this.$router.push("/list");
    }
  },
}
</script>

<template>
    <div class="root">
      <SideBar width="434" height="971" class="sideBar">
        <div class="options">
            <button class="btnBack" @click="goToFormsListPage">
                <img src="../assets/img/arrow-left.png">
                Назад
            </button>   
            <span>Тип формы</span>
            <span>Сущности</span>
            <span>Поля</span>
            <span>Правила показа полей</span>
            <span>Другие настройки</span>
            <div class="footerBtns">
                <button type="button">Скрипт</button>
                <button class="btn" type="button">Сохранить</button>
            </div>
        </div>
      </SideBar>
      <div class="main">
          <div class="header">
              <span class="title">Поля</span>   
          </div>
          <span class="hiddenTitle">Скрытые поля</span> 
          <button class="AddFieldBtn" type="button">
              Добавить поле
              <img class="plus" src="../assets/img/plus.png">
          </button> 
          <span class="fieldTitle">Поля</span> 
          <div class="fields">
              <Field v-for="(item, index) in itemsStore.getItems()" :key="item" :value="item.field" :index="index"/>
          </div>
          <button class="AddFieldBtn" type="button" @click="itemsStore.addItem({field: ''})">
              Добавить поле
              <img class="plus" src="../assets/img/plus.png">
          </button>
          <button class="AddPageBtn" type="button" @click="goToPreviePage">
              <span class="test">Добавить страницу формы</span>
              <img class="plus" src="../assets/img/plus.png">
          </button>  
      </div>
      <Previe/>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.root {
  background-color: #3EA748;
}

.sideBar{
  z-index: 7;
}

.main{
 position: absolute; 
 z-index: 3;
 left: 391px;
 width: 525px;
 display: flex;
 flex-direction: column;
 background-color: #F9F9F9;
 border-radius: 0 10px 10px 0;
 min-height: 971px;
}

.main > *{
  margin-left: 70px;
}

.header{
  margin-top: 75px;
}

.hiddenTitle{
  margin-top: 30px;
  margin-bottom: 15px;
}

.AddFieldBtn, .AddPageBtn{
 margin-top: 20px;
 width: 415px;
 height: 70px;
 border:  1px dashed;
 display: flex;
 align-items: center;
 padding-left: 30px;
}

.AddFieldBtn{
  gap: 212px; 
}

.AddPageBtn{
  margin-top: 35px;
  gap: 120px; 
  margin-bottom: 71px;
}

.fieldTitle{
  margin-top: 45px;
}

.fields{
  margin-top: 30px;
}

.btnBack{
  display: flex;
  align-items: baseline;
  gap: 8px;
  height: 20px;
  margin-bottom: 50px;
  border: none;
  color: black;
  font-weight: normal;
}

.footerBtns{
  position: absolute;
  top: 650px; 
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>