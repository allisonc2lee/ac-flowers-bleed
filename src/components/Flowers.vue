<template>
  <div class="flowers">
    <div class="flowers">
      <RadioSelector
        :className="'radio-selector-flex radio-selector-flex-img'"
        :items="flowers"
        radioName="flowerType"
        v-on:getCheckVal="getSelectedType"
        :showImage="true"
        v-on:click="showResults = !showResults"
      />
    </div>
    <div class>
      <h3 v-if="type">{{ type }}</h3>
    </div>
    <div class="flower-results" v-if="type">
      <FlowerItem :typeItem="results" :showResults="showResults" />
    </div>
  </div>
</template>

<script>
import RadioSelector from "./RadioSelector";
import FlowerItem from "./FlowerItem";

export default {
  names: "Flowers",
  components: { RadioSelector, FlowerItem },
  props: ["flowers"],
  data: function() {
    return {
      type: "",
      results: [],
      showResults: false
    };
  },
  methods: {
    getSelectedType: function(val) {
      this.type = val;
      this.results = this.flowers.filter(({ name }) => name === this.type);
    }
  }
};
</script>

<style scoped></style>
