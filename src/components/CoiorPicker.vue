<template>
  <div class>
    <div class="selectedColor" v-if="colors.length > 0">
      <div class="selectedColor-tiles">
        <div class="selectedColor-tiles-one">
          <h4>Color 1</h4>
          <RadioSelector
            radioName="color1"
            :items="colors"
            :radioType="type"
            :className="'radio-selector-flex'"
            v-on:getCheckVal="getCheckValue1"
          />
        </div>
        <div class="selectedColor-tiles-two" v-if="color1">
          <h4>Color 2</h4>
          <RadioSelector
            :items="colors"
            radioName="color2"
            v-on:getCheckVal="getCheckValue2"
            :radioType="type"
            :className="'radio-selector-flex'"
          />
        </div>
      </div>
    </div>
    <div class="color-result" v-if="selectedColors.length == 2">
      <div>
        <h4>Result</h4>
        <ColorBox :colorStr="result" v-if="foundResult" />
        <p>{{ result }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import RadioSelector from "./RadioSelector";
import ColorBox from "./ColorBox";

export default {
  name: "ColorPicker",
  components: {
    RadioSelector,
    ColorBox
  },
  props: {
    colors: {
      type: Array,
      default: []
    },
    outcomes: {
      type: Array,
      default: []
    }
  },
  data: function() {
    return {
      color1: "",
      color2: "",
      selectedColors: [],
      isDisabled: true,
      max: 2,
      result: "",
      moreThanOne: false,
      type: "colorBtn",
      foundResult: false
    };
  },
  methods: {
    getCheckValue1: function(val) {
      this.color1 = val;
      if (this.color2) {
        this.selectedColors = [this.color1, this.color2];
      }

      if (this.selectedColors.length >= 2) {
        this.getResult();
      }
    },
    getCheckValue2: function(val) {
      this.color2 = val;
      this.selectedColors = [this.color1, this.color2];

      if (this.selectedColors.length >= 2) {
        this.getResult();
      }
    },
    getResult: function() {
      let selected = [];
      let selectedIndex = null;

      if (this.selectedColors.length === this.max) {
        this.selectedColors.map(color => {
          selected = [...selected, color];
        });
        this.outcomes.map((outcome, index) => {
          const { flowers } = outcome;
          const flowersString = flowers.sort().toString();
          const selectedString = selected.sort().toString();
          if (flowersString === selectedString) {
            selectedIndex = index;
          }
        });
      }
      if (this.selectedColors.length > this.max) {
        this.result = "";
      }
      if (selectedIndex !== null) {
        this.result = this.outcomes[selectedIndex].outcome[0];
        this.foundResult = true;
      } else {
        this.result = "It won't breed. Please try again";
        this.foundResult = false;
      }
    }
  }
};
</script>

<style scoped>
</style>
