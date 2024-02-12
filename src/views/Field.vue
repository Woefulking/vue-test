<script >
import { ref } from 'vue'
import { useItemsStore } from '@/stores/items'

export default {
  props: {
      value: {
          type: String,
          required: true
      },
      index: {
          type: Number,
          required: true
      }
  },
  data: (props) => {
    const fieldName = ref(props.value)
    let deleted = ref(false)
    const ItemStore = useItemsStore()
    return{
      fieldName,
      deleted,
      ItemStore,
    }
  },
  methods: {
    deleteAndHide() {
      this.ItemStore.deleteItem(this.$props.index)
      this.deleted = true;
    },
    updateItemField(newField) {
      this.ItemStore.updateItemField(this.$props.index, newField)
    },
    updateRequired(){
      this.ItemStore.updateRequired(this.$props.index)
    }

  }
}
</script>

<template>
    <div v-if="!deleted" id="field">
        <div class="fieldHeader">
            <div class="headerLeft">
                <span>{{ fieldName }}</span>
                <span>Контакт</span>
            </div>
            <span class="deleteField" @click="deleteAndHide">Удалить поле</span>
        </div>
        <input type="text" v-model="fieldName" class="input" @input="updateItemField(fieldName)"/>
        <div class="fieldFooter">
            <input type="checkbox" id="checkbox" @click="updateRequired"/>
            <label for="checkbox" class="label">Сделать поле обязательным</label>
        </div>
    </div>
</template>

<style scoped>
#field{
    margin-bottom: 20px;
}
.fieldHeader{
  width: 415px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
}

.fieldFooter{
  display: flex;
  flex-direction: row;
  align-items: center;
}

#checkbox{
    width: 24px;
    height: 24px;
    border-color: #212121;
    border-radius: 4px;
}

.label{
  padding-left: 10px;
}

.headerLeft{
  font-weight: 400;
  opacity: 50%;
  font-size: 16px;
  display: flex;
  gap: 16px;
}

.deleteField{
  font-size: 16px;
  color: #3EA748;
  cursor: pointer;
}

.input{
  width: 415px;
  height: 70px; 
}

</style>