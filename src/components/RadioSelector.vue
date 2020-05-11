<template>
  <div :class="`radio-selector ${className}`">
    <div
      v-for="({ name, imgSrc }, colorCode) in items"
      :key="colorCode"
      class="radio-selector-wrapper"
    >
      <label class="radio-selector-img">
        <input
          type="radio"
          :checked="state.radio === state.selected"
          :name="radioName"
          :value="name"
          v-model="state.setected"
          @change="emitChecked"
        />
        <img
          v-if="radioType === 'img'"
          :src="imgSrc"
          :alt="name"
          class="radio-image-button"
        />
        <div class="radio-color-picker" v-if="radioType === 'colorBtn'">
          <ColorBox
            :colorStr="name"
            :setected="state.setected"
            :isShowing="state.isShowing"
            :flowerType="flowerType"
          />
        </div>
      </label>
      <div class>
        <p v-if="name === 'red2'">Red (Bred)</p>
        <p v-else>{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import ColorBox from './ColorBox';

export default {
  name: 'RadioSelector',
  components: { ColorBox },
  setup(props, { emit }) {
    const state = reactive({
      setected: '',
      isShowing: false,
      radio: ''
    });

    const emitChecked = ({ target }) => {
      let targetVal = target.value;
      state.isShowing = !state.isShowing;
      emit('getCheckVal', state.setected);
      emit('toggleAnimation', state.isShowing);
      state.radio = target.value;
    };

    return {
      state,
      emitChecked
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    radioName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: undefined
    },
    radioType: {
      type: String,
      default: 'img'
    },
    flowerType: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.radio-selector-flex {
  display: flex;
  flex-wrap: wrap;
}

.radio-selector-flex-img .radio-selector-wrapper {
  width: 25%;
}

.radio-image-button {
  width: 50%;
}

.radio-selector-img > input {
  display: none;
}
.radio-selector-img > img {
  cursor: pointer;
  border: 3px solid #ddd;
}

.radio-selector-img > input:checked + img {
  border: 3px solid #ec407a;
}

.radio-selector-img > input:checked + .radio-color-picker .color-box {
  border: 3px solid #ec407a;
}

.radio-selector .radio-color-picker .color-box {
  padding: 8px;
  border-radius: 10px;
  border: 3px solid #ddd;
}
</style>
