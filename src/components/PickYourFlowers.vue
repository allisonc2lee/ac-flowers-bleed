<template>
  <div class="pick-your-own-flowers">
    <div class="flowers">
      <label v-for="({name, flowerId}, index) in flowers" :key="flowerId + index" :for="name">
        <input
          type="radio"
          :name="name"
          :value="name"
          v-model="selectedFlower"
          @change="showColors"
        />
        <span>image</span>
      </label>
    </div>
    <!-- COLOR PICKER -->
    <ColorPicker v-bind:colors="this.colors" v-bind:outcomes="outcomes" />
    <!-- TODO: Render result -->
  </div>
</template>

<script>
import ColorPicker from "./CoiorPicker";

export default {
  name: "PickYourFlowers",
  components: {
    ColorPicker
  },
  props: ["flowers"],
  data: function() {
    return {
      colors: [],
      outcomes: [],
      selectedFlower: "",
      selectedColors: []
    };
  },
  methods: {
    showColors: function(event) {
      const { value } = event.target;

      this.flowers.map(({ name, colors, outcome }) => {
        if (name === value) {
          this.selectedFlower === name;
          this.colors = colors;
          this.outcomes = outcome;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>