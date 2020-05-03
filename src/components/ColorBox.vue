<template>
  <div class="color-box">
    <div :style="cssVars" :class="'color-box--color ' + 'colorbox--' + colorStr"></div>
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
    cssVars: function() {
      return {
        "--color-red": "#e53935",
        "--color-white": "#ffffff",
        "--color-black": "#1f1f1f",
        "--color-orange": "#ef6c00",
        "--color-pink": "#ec407a",
        "--color-purple": "#ab47bc",
        "--color-green": "#4caf50",
        "--color-blue": "#03a9f4",
        "--color-yellow": "#ffeb3b"
      };
    }
  }
};
</script>

<style scoped>
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
  background: var(--color-red);
}

.colorbox--white {
  background: var(--color-white);
}
.colorbox--black {
  background: var(--color-black);
}
.colorbox--yellow {
  /* background: var(--color-yellow); */
  background: #ffeb3b;
}
.colorbox--orange {
  background: var(--color-orange);
}
.colorbox--pink {
  background: var(--color-pink);
}
.colorbox--purple {
  background: var(--color-purple);
}
.colorbox--green {
  background: var(--color-green);
}
.colorbox--blue {
  background: var(--color-blue);
}
</style>