<template>
  <div class="pick-your-own-flowers">
    <div class="flowers">
      <RadioSelector
        :className="'radio-selector-flex radio-selector-flex-img'"
        :items="flowers"
        radioName="flowerType"
        v-on:getCheckVal="getFlowerType"
        radioType="img"
      />
    </div>
    <!-- COLOR PICKER -->
    <transition name="component-fade" mode="out-in">
      <ColorPicker
        :colors="state.colors"
        :outcomes="state.outcomes"
        :flowerType="state.type"
      />
    </transition>
  </div>
</template>

<script>
import ColorPicker from './CoiorPicker';
import RadioSelector from '../components/RadioSelector';
import { reactive } from '@vue/composition-api';
import { useToggleAnimation } from '../cmp-functions/toggleAnimation';

export default {
  name: 'PickYourFlowers',
  components: {
    ColorPicker,
    RadioSelector
  },
  props: {
    flowers: {
      type: Array,
      default: () => []
    }
  },
  setup({ flowers }) {
    const state = reactive({
      type: '',
      colors: [],
      outcomes: [],
      selectedColors: [],
      selectedFlower: ''
    });

    const getFlowerType = val => {
      state.type = val;
      flowers.map(({ name, colors, outcome }) => {
        if (name === state.type) {
          state.selectedFlower === name;
          state.colors = colors;
          state.outcomes = outcome;
        }
      });
    };

    return { state, getFlowerType };
  }
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
