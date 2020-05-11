<template>
  <div class="flowers">
    <div class="flowers">
      <RadioSelector
        :className="'radio-selector-flex radio-selector-flex-img'"
        :items="flowers"
        radioName="flowerType"
        v-on:getCheckVal="getSelectedType"
        :showImage="true"
      />
    </div>
    <div class>
      <h3 v-if="state.type">{{ state.type }}</h3>
    </div>
    <div class="flower-results" v-if="state.flowerType">
      <FlowerItem
        :typeItem="state.results"
        :showResults="!state.showResults"
        :flowerType="state.flowerType"
      />
    </div>
  </div>
</template>

<script>
import RadioSelector from './RadioSelector';
import FlowerItem from './FlowerItem';
import { reactive, ref } from '@vue/composition-api';
import { useToggleAnimation } from '../cmp-functions/toggleAnimation';

export default {
  names: 'Flowers',
  components: { RadioSelector, FlowerItem },
  props: ['flowers'],
  setup(props) {
    const { flowers } = props;
    const state = reactive({
      flowerType: '',
      results: [],
      showResults: false
    });

    const getSelectedType = val => {
      state.flowerType = val;
      state.results = flowers.filter(({ name }) => name === state.flowerType);
    };

    return { state, getSelectedType };
  }
};
</script>

<style scoped></style>
