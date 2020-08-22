<template>
  <div class="whole-thing">
    <h1 :style="{color: color}">{{ message }}</h1>
    <input type="text" v-model="message" />
    <color-picker
      @color-change="colorChange"
      :colors="['black', 'red', 'green', 'blue']"
    ></color-picker>
  </div>
</template>

<script>
// component for the whole Vue app. Has an <input> tag for updating the text of
// the header, and a <color-picker> component for updating the color of the
// header. Both forms of input receive events that update the component's data.

import ColorPicker from './ColorPicker.vue';

export default {
  name: 'App',
  components: {
    'color-picker': ColorPicker,
  },

  data() {
    return {
      color: 'black',
      message: 'write a message',
    };
  },

  methods: {
    colorChange(color) {
      this.color = color;
    },
  },
}
</script>