<template>
  <div class="flower-doc">
    <h3 class="page-tilte flower-doc">Look at the Doc</h3>
    <Flowers v-bind:flowers="flowers" />
  </div>
</template>

<script>
// @ is an alias to /src
import Flowers from "../components/Flowers";
import flowersData from "../data/flowers.json";

export default {
  name: "Home",
  components: {
    Flowers
  },
  data: function() {
    return {
      flowers: flowersData
    };
  }
};
</script>
