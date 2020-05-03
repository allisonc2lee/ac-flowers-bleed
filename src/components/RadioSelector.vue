<template>
  <div class="radio-selector">
    <label v-for="{ name, colorCode } in items" :key="colorCode" :for="name">
      <input
        type="radio"
        :name="radioName"
        :value="name"
        v-model="setected"
        @change="emitChecked"
      />
      <span v-if="name === 'red2'">Red (Bred)</span>
      <span v-else>{{ name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioSelector",
  props: ["items", "radioName"],
  data: function() {
    return {
      setected: ""
    };
  },
  methods: {
    emitChecked: function(setected) {
      this.$emit("getCheckVal", this.setected);
    }
  }
};
</script>

<style scoped></style>
