<template>
  <div class="pick-your-own-flowers">
    <div class="flowers">
      <RadioSelector
        :className="'radio-selector-flex radio-selector-flex-img'"
        :items="flowers"
        radioName="flowerType"
        v-on:toggleAnimation="toggleAnimation"
        v-on:getCheckVal="getFlowerType"
        radioType="img"
      />
    </div>
    <!-- COLOR PICKER -->
    <transition name="component-fade" mode="out-in">
      <ColorPicker :colors="colors" :outcomes="outcomes" v-if="isShowing" />
    </transition>
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
      selectedColors: [],
      isShowing: false
    };
  },
  methods: {
    getFlowerType: function(val) {
      this.type = val;
      this.flowers.map(({ name, colors, outcome }) => {
        if (name === this.type) {
          this.selectedFlower === name;
          this.colors = colors;
          this.outcomes = outcome;
        }
      });
    },
    toggleAnimation: function(isShow) {
      this.isShowing = isShow;
    }
  }
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
