<template lang="pug">
  form
    h3.select-header Select a color
    button(
      v-for="color in colors",
      :key="color",
      @click.prevent="selectColor(color)"
    ) {{ color }}
</template>

<script>
// our color picker component. Displays a button for each color passed into the
// "colors" prop. When the button its clicked, it emits a color-change event.
export default {
  name: 'ColorPicker',
  props: ['colors'],
  methods: {
    selectColor(color) {
      this.$emit('color-change', color);
    },
  },
}
</script>

<style scoped>
.select-header {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>