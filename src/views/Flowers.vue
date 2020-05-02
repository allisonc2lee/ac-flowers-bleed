<template>
  <div class="flower-doc">
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
