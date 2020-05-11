<template>
  <div class="flower-item">
    <div class v-for="(item, name) in typeItem" :key="name">
      <div
        v-for="(outcome, name2) in item.outcome"
        :key="name2"
        class="flower-item-result"
      >
        <div class="outcome-result" v-if="showResults">
          <h4>Results</h4>
          <ColorBox :colorStr="outcome.outcome[0]" :type="type" />
          <transition name="slide-fade">
            <p>{{ outcome.outcome[0] }}</p>
          </transition>
        </div>
        <div v-if="outcome.outcome[0]" class="outcome-flower">
          <h4>Colors</h4>
          <div
            v-for="(flower, name3) in outcome.flowers"
            :key="name3"
            class="outcome-flower-color"
          >
            <ColorBox :colorStr="flower" :type="type" />
            <transition name="slide-fade">
              <p>{{ flower }}</p>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ColorBox from "./ColorBox";
import ColorBox from './ColorBox';

export default {
  name: 'FlowerItem',
  components: { ColorBox },
  props: {
    typeItem: {
      type: Array,
      default: []
    },
    showResults: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.flower-item-result {
  display: flex;
}

.outcome-result {
  flex: 0 0 10%;
}

.outcome-flower-color {
  display: inline-block;
  justify-content: space-between;
}
</style>
