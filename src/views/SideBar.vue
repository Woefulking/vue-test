<script setup>
defineProps({
  width: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
})
</script>

<template>
    <div :style="`width: ${width}px; height: ${height}px;`" class="sideBar">
        <slot></slot>
    </div>
</template>

<style scoped>
.sideBar {
  background-color: white;
  border-radius: 0 10px 10px 0;
}
</style>