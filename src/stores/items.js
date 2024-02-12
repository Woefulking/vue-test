import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [
      { field: 'Фамилия',
        value: null,
        required: false,
      },
      { field: 'Имя',
        value: null,
        required: false,
      }
    ],
  }),
  actions: {
    getItems() {
      return this.items;
    },
    addItem(item) {
      this.items.push(item);
    },
    deleteItem(index){
      this.items.splice(index, 1);
    },
    updateItemField(index, newField){
      this.items[index].field = newField
    },
    updateRequired(index) {
      this.items[index].required = !this.items[index].required
    }

  }
})

