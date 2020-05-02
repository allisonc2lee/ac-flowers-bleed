<template>
  <div class>
    <div class="selectedColor" v-if="colors.length > 0">
      <div class="selectedColor-tiles selectedColor-one">
        <!-- <div class v-if="selectColorOne.length > 1">please only select one color</div> -->
        <RadioSelector :colors="colors" radioName="color1" v-on:getCheckVal="getCheckValue1" />
        <RadioSelector
          :colors="colors"
          radioName="color2"
          v-on:getCheckVal="getCheckValue2"
          v-if="color1"
        />
      </div>
    </div>
    <div class="color-result" v-if="selectedColors.length == 2">
      <div>{{result}}</div>
    </div>
  </div>
</template>

<script>
import RadioSelector from "./RadioSelector";

export default {
  name: "ColorPicker",
  components: {
    RadioSelector
  },
  props: ["colors", "outcomes"],
  data: function() {
    return {
      color1: "",
      color2: "",
      selectedColors: [],
      isDisabled: true,
      max: 2,
      result: "",
      moreThanOne: false
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
      } else {
        this.result = "It won't breed. Please try again";
      }
    }
  }
};
</script>

<style scoped>
</style>