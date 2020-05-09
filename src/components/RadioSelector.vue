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
          :name="radioName"
          :value="name"
          v-model="setected"
          @change="emitChecked($event, setected)"
        />
        <img v-if="radioType === 'img'" :src="imgSrc" :alt="name" class="radio-image-button" />
        <div class="radio-color-picker" v-if="radioType === 'colorBtn'">
          <ColorBox :colorStr="name" :setected="setected" :isShowing="isShowing" />
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
import ColorBox from "./ColorBox";

export default {
  name: "RadioSelector",
  components: { ColorBox },
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
      default: "img"
    }
  },
  data: function() {
    return {
      setected: "",
      isShowing: false,
      activeAnimation: true
    };
  },
  methods: {
    emitChecked: function(event, selected) {
      var targetVal = event.target.value;
      // console.log(`targetVal ${targetVal} | selected ${this.setected}`);

      this.isShowing = !this.isShowing;
      console.log("boom");
      this.$emit("getCheckVal", this.setected);
      this.$emit("toggleAnimation", this.isShowing);
    }
  },
  watch: {
    setected: function(newVal, oldVal) {
      if (newVal != oldVal) {
        console.log("value changed from " + oldVal + " to " + newVal);
        this.isShowing = !this.isShowing;
      }
    }
  }
};
</script>

<style scoped>
.radio-selector-flex {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
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
