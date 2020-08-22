<template>
  <div class="whole-thing">
    <!--
      The CSS in ColorPicker.vue does not get applied to this header even
      though it has the select-header class since that CSS rule is scoped to
      ColorPicker.vue.
    -->
    <h1 :style="{color: color}" class="select-header">{{ message }}</h1>
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