<template>
  <div class>
    <div class="selectedColor" v-if="colors.length > 0">
      <div class="selectedColor-tiles">
        <div class="selectedColor-tiles-one">
          <h4>Color 1</h4>
          <RadioSelector
            radioName="color1"
            :items="colors"
            :radioType="state.type"
            :className="'radio-selector-flex'"
            v-on:getCheckedName="getCheckedValue"
            :flowerType="flowerType"
          />
        </div>
        <div
          class="selectedColor-tiles-two"
          v-if="state.selectedColors.length >= 1"
        >
          <h4>Color 2</h4>
          <RadioSelector
            :items="colors"
            radioName="color2"
            v-on:getCheckedName="getCheckedValue"
            :radioType="state.type"
            :className="'radio-selector-flex'"
            :flowerType="flowerType"
          />
        </div>
      </div>
    </div>
    <div class="color-result" v-if="state.selectedColors.length == 2">
      <div>
        <h4>Result</h4>
        <ColorBox :colorStr="state.result" :flowerType="flowerType" />
        <p>{{ state.result }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import RadioSelector from './RadioSelector';
import ColorBox from './ColorBox';
import { reactive } from '@vue/composition-api';

export default {
  name: 'ColorPicker',
  components: {
    RadioSelector,
    ColorBox
  },
  props: {
    colors: {
      type: Array,
      default: () => []
    },
    outcomes: {
      type: Array,
      default: () => []
    },
    flowerType: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      selectedColors: [],
      isDisabled: true,
      result: '',
      moreThanOne: false,
      type: 'colorBtn',
      foundResult: false
    });

    const getResult = () => {
      let max = 2;
      let selected = [];
      let selectedIndex = null;
      if (state.selectedColors.length === max) {
        state.selectedColors.map(color => {
          selected = [...selected, color];
        });
        props.outcomes.map((outcome, index) => {
          const { flowers } = outcome;
          const flowersString = flowers.sort().toString();
          const selectedString = selected.sort().toString();
          if (flowersString === selectedString) {
            selectedIndex = index;
          }
        });
      }
      if (state.selectedColors.length > max) {
        state.result = '';
      }
      if (selectedIndex !== null) {
        return (state.result = props.outcomes[selectedIndex].outcome[0]);
      } else {
        return (state.result = "It won't breed. Please try again");
      }
    };

    const getCheckedValue = target => {
      const { name, value } = target;

      if (state.selectedColors.length < 2) {
        state.selectedColors = [...state.selectedColors, value];
      } else {
        if (target.name === 'color1') {
          state.selectedColors[0] = target.value;
        }

        if (target.name === 'color2') {
          state.selectedColors[1] = target.value;
        }
      }

      if (state.selectedColors.length >= 2) {
        getResult();
      }
    };
    return { state, getCheckedValue };
  }
};
</script>

<style scoped></style>
