<template>
  <div class="flowers">
    Flower Docs
    <div class="flowers">
      <RadioSelector
        :className="'radio-selector-flex'"
        :items="flowers"
        radioName="flowerType"
        v-on:getCheckVal="getSelectedType"
        :showImage="true"
      />
    </div>
    <div class>
      <h3 v-if="type">{{type}}</h3>
    </div>
    <div class="flower-results" v-if="type">
      <FlowerItem :typeItem="results" />
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
      results: []
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

<style scoped>
</style>