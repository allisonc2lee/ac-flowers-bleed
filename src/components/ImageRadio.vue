<template>
  <div class="image-radio">
    <label>
      <input type="radio" :name="`imageRadio${name}`" value="small" checked />
      <img src="" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'ImageRadio',
  props: {
    name: String,
    imgSrc: String
  }
};
</script>

<style scoped></style>
