<template>
  <div class="home">
    <PickYourFlowers v-bind:flowers="flowers" />
  </div>
</template>

<script>
// @ is an alias to /src
import PickYourFlowers from "../components/PickYourFlowers";
import flowersData from "../data/flowers.json";

export default {
  name: "Home",
  components: {
    PickYourFlowers
  },
  data: function() {
    return {
      flowers: flowersData
    };
  }
};
</script>
