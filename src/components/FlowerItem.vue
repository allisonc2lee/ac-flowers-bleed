<template>
  <div class="flower-item">
    <div class v-for="(item, name) in typeItem" :key="name">
      <div
        v-for="(outcome, name2) in item.outcome"
        :key="name2"
        class="flower-item-result"
      >
        <div class="outcome-result">
          <h4>Results</h4>
          <ColorBox :colorStr="outcome.outcome[0]" />
          <p>{{ outcome.outcome[0] }}</p>
          <!-- <span>{{outcome.outcome[0]}}</span> -->
        </div>
        <div v-if="outcome.outcome[0]" class="outcome-flower">
          <!-- <span>{{outcome.flowers}}</span> -->
          <h4>Colors</h4>
          <div
            v-for="(flower, name3) in outcome.flowers"
            :key="name3"
            class="outcome-flower-color"
          >
            <ColorBox :colorStr="flower" />
            <p>{{ flower }}</p>
          </div>
        </div>
      </div>
      <!-- <div v-for="(color, name3) in item.color" :key="name3">{{color}}</div> -->
    </div>
  </div>
</template>

<script>
// import ColorBox from "./ColorBox";
import ColorBox from "./ColorBox";

export default {
  name: "FlowerItem",
  components: { ColorBox },
  props: {
    typeItem: Array
  }
};
</script>

<style scoped>
/* .outcome-result,
.outcome-flower,
.outcome-flower-color {
  display: inline-block;
} */

.flower-item-result {
  display: flex;
  /* justify-content: center; */
}

.outcome-result {
  flex: 0 0 10%;
}

.outcome-flower-color {
  display: inline-block;
  justify-content: space-between;
}
</style>
