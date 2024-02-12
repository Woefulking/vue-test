<!-- 
  Хотел так же сделать дополнительную валидацию этой формы,  
  но не до конца понял механизм проверки
 -->
<script>
import { useItemsStore } from '@/stores/items'

export default {
  data: () => {
    return{
      showError: false,
      itemsStore: useItemsStore(),
    }
  },
  methods: {
    validateFields() {
      this.showError = true;
    },
  },
}
</script>

<template>
    <div class="previe">
        <span class="previeTitle">Форма регистрации участников</span> 
        <div class="previeMain" v-for="item in itemsStore.getItems()" :key="item">
          <input type="text" :placeholder="item.field" v-model="item.value" class="input"/>
          <span v-if="item.required && !item.value && showError" class="error">Это поле обязательно для заполнения</span>
        </div>
        <div class="previeFooter">
            <input type="checkbox" id="checkbox"/>
            <label for="checkbox" class="label">Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</label>
        </div>
        <button class="btn" type="button" @click="validateFields">Отправить</button>
    </div>
</template>

<style scoped>
.previe{
  position: absolute; 
  left: 991px;
  top: 88px;
  width: 349px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

.previe > * {
  margin-left: 40px;
}

.previeTitle{
  margin-top: 40px;
  margin-bottom: 40px;
}

.previeMain{
  display: flex;
  flex-direction: column;
}

.error{
  font-size: 12px;
  color:red;
  margin-bottom: 5px;
}

.input {
  width: 269px;
  height: 70px;
}

.previeFooter{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 16px;
}

#checkbox{
width: 24px;
height: 24px;
}

.label{
  width: 260px;
}

.btn{
  width: 269px;
  height: 50px;
  margin-bottom: 50px;
}

</style>