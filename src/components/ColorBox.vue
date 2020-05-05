<template>
  <div class="color-box">
    <div :class="'color-box--color ' + 'colorbox--' + colorStr"></div>
  </div>
</template>

<script>
export default {
  name: "ColorBox",
  props: {
    hexCode: String,
    colorStr: String
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {

  }
};
</script>

<style lang="scss" scoped>
.color-box {
  margin-right: 10px;
}

.color-box--color {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  box-shadow: 2px 4px 2px 1px rgba(207, 207, 207, 1);
}

.colorbox--red {
  background: $red;
}

.colorbox--white {
  background: $white;
}
.colorbox--black {
  background: $black;
}
.colorbox--yellow {
  /* background: var(--color-yellow); */
  background: $yellow;
}
.colorbox--orange {
  background: $orange;
}
.colorbox--pink {
  background: $pink;
}
.colorbox--purple {
  background: $purple;
}
.colorbox--green {
  background: $green;
}
.colorbox--blue {
  background: $blue;
}

.colorbox--red2 {
  background: $red;
  border: 5px solid $yellow;
}

</style>