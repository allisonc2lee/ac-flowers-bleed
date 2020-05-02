<template>
  <div class>
    <div class="selectedColor" v-if="colors.length > 0">
      <div class="selectedColor-tiles selectedColor-one">
        <div class v-if="selectColorOne.length > 1">please only select one color</div>
        <!-- dynamically render color -->
        <label v-for="{name, colorCode} in colors" :key="colorCode" :for="name">
          <input type="checkbox" :name="name" :value="name" v-model="selectColorOne" />
          <span v-if="name === 'red2'">Red (Bred)</span>
          <span v-else>{{name}}</span>
          <!--  TODO: SECOND ROW -->
        </label>
      </div>

      <div
        class="selectedColor-tiles selectedColor-two"
        v-if="selectColorOne.length == 1 || selectColorTwo.length == 1"
      >
        <div class v-if="selectColorTwo.length > 1">please only select one color</div>
        <!-- dynamically render color -->
        <label v-for="{name, colorCode} in colors" :key="colorCode" :for="name">
          <input
            type="checkbox"
            :name="name"
            :value="name"
            v-model="selectColorTwo"
            @change="filterResultHandler"
          />
          <span v-if="name === 'red2'">Red (Bred)</span>
          <span v-else>{{name}}</span>
          <!--  TODO: SECOND ROW -->
        </label>
      </div>
    </div>
    <div class="color-result" v-if="selectedColors.length == 2">
      <div>{{result}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: ["colors", "outcomes"],
  data: function() {
    return {
      selectColorOne: [],
      selectColorTwo: [],
      selectedColors: [],
      isDisabled: true,
      max: 2,
      result: "",
      moreThanOne: false
    };
  },
  methods: {
    filterResultHandler: function() {
      let selected = [];
      let selectedIndex = null;
      this.selectedColors = [...this.selectColorOne, ...this.selectColorTwo];

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