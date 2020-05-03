<template>
  <div :class="'radio-selector ' + className">
    <label v-for="({name, imgSrc}, colorCode) in items" :key="colorCode" :for="name">
      <!-- {{items}} -->
      <img :src="`require(…/assets/products/${imgSrc})`" alt />
      <!-- <img v-if="showImage" :src="`~assets/flowers/${imgSrc}`" /> -->
      <img v-if="showImage" src="../static/assets/flowers/NH-red_cosmos-icon.png" />
      <div class="radio-name">
        <span v-if="name === 'red2'">Red (Bred)</span>
        <span v-else>{{name}}</span>
      </div>
    </label>
  </div>
</template>

<script>
// import abs from ''

export default {
  name: "RadioSelector",
  props: ["items", "radioName", "showImage", "className"],
  data: function() {
    return {
      setected: "",
      path: ""
    };
  },
  methods: {
    emitChecked: function(setected) {
      this.$emit("getCheckVal", this.setected);
    }
  }
};
</script>

<style scoped>
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type="radio"]:checked + img {
  outline: 2px solid #f00;
}

.radio-selector-flex {
  display: flex;
  justify-content: space-around;
}

.radio-selector-flex label {
  text-align: center;
}
</style>