// our color picker component. Displays a button for each color passed into the
// "colors" prop. When the button its clicked, it emits a color-change event.
const ColorPicker = Vue.component('color-picker', {
  template: `
    <form>
      <h3>Select a color</h3>
      <button
        v-for="color in colors"
        :key="color"
        @click.prevent="selectColor(color)"
      >
        {{ color }}
      </button>
    </form>
  `,

  name: 'ColorPicker',
  props: ['colors'],
  methods: {
    selectColor(color) {
      this.$emit('color-change', color);
    },
  },
});

// component for the whole Vue app. Has an <input> tag for updating the text of
// the header, and a <color-picker> component for updating the color of the
// header. Both forms of input receive events that update the component's data.
const App = Vue.component('app', {
  template: `
    <div class="whole-thing">
      <h1 :style="{color: color}">{{ message }}</h1>
      <input type="text" v-model="message" />
      <color-picker
        @color-change="colorChange"
        :colors="['black', 'red', 'green', 'blue']"
      ></color-picker>
    </div>
  `,

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
});

// mount the App component to the #app div.
new Vue({
  render: h => h(App),
}).$mount('#app');