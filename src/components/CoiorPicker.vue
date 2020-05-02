<template>
  <div class>
    <div class="selectedColor" v-if="colors.length > 0">
      <div class v-if="selectedColors.length > 2">please select 2 colors only</div>
      <!-- dynamically render color -->
      <label v-for="{name, colorCode} in colors" :key="colorCode" :for="name">
        <input
          type="checkbox"
          :name="name"
          :value="name"
          @change="selectColorsHandler"
          v-model="selectedColors"
        />
        <span v-if="name === 'red2'">Red (Bred)</span>
        <span v-else>{{name}}</span>
        <!--  TODO: Figure out the extra checkbox in the end -->
      </label>
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
      selectedColors: [],
      isDisabled: true,
      max: 2,
      result: "",
      foundResult: false
    };
  },
  methods: {
    selectColorsHandler: function() {
      let selected = [];
      let selectedIndex = null;

      if (this.selectedColors.length === this.max) {
        this.selectedColors.map(color => {
          selected = [...selected, color];
        });

        const found = this.outcomes.map((outcome, index) => {
          const { flowers } = outcome;
          console.log(flowers.every(flower => selected.includes(flower)));
          if (flowers.every(flower => selected.includes(flower))) {
            return (selectedIndex = index);
          }
        });

        console.log(found);

        this.result = this.outcomes[selectedIndex].outcome[0];
      }

      if (this.selectedColors.length > this.max) {
        this.result = "";
      }
    }
  }
};
</script>

<style scoped>
</style>