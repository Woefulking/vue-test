<script>
import { ref } from 'vue'

export default {
  data: () => {
    let deleted = ref(false)
    return {
        deleted,  
    }
  },
  methods: {
    goToCreatePage() {
        this.$router.push("/create");
    },
    deleteAndHide() {
        this.deleted = true;
    },  
  }
}

</script>

<template>
    <div class="form" v-if="!deleted">
        <div class="formLeftPart">
          <span class="formTitle">Форма регистрации участников</span>
          <span class="formAuthor">Автор: user1</span>
          <span class="formDate">Дата создания: 01.01.23</span>
        </div>
        <div class="formRightPart">
          <button class="editBtn" type="button"  @click="goToCreatePage">Редактировать</button>
          <button class="deleteBtn" type="button" @click="deleteAndHide">Удалить</button>
        </div>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.form{
  width: 825px;
  height: 190px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline
}

.formLeftPart{
  position: relative;
  top: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
}

.formTitle{
  font-size: 24px;
  font-weight: 500;
}

.formAuthor, .formDate{
  font-size: 14px;
  font-weight: 400;
  opacity: 50%;
}

.formAuthor{
  margin-top: 8px;
}
.formDate{
  margin-top: 58px;
}

.formRightPart{
  position: relative;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
}

.editBtn {
  width: 179px;
  height: 42px;
  margin-bottom: 58px;
}

.deleteBtn{
  width: 179px;
  height: 42px;
  border: none;
}

.deleteBtn:hover{
  filter: brightness(100%);
}

</style>