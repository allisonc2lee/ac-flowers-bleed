<template>
  <div class="pick-your-own-flowers">
    <div class="flowers">
      <RadioSelector
        :items="flowers"
        radioName="flowerType"
        v-on:getCheckVal="getFlowerType"
        :showImage="true"
      />
    </div>
    <!-- COLOR PICKER -->
    <ColorPicker v-bind:colors="this.colors" v-bind:outcomes="outcomes" />
  </div>
</template>

<script>
import ColorPicker from "./CoiorPicker";
import RadioSelector from "../components/RadioSelector";

export default {
  name: "PickYourFlowers",
  components: {
    ColorPicker,
    RadioSelector
  },
  props: ["flowers"],
  data: function() {
    return {
      type: "",
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
    },
    getFlowerType: function(val) {
      this.type = val;
      this.flowers.map(({ name, colors, outcome }) => {
        if (name === this.type) {
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