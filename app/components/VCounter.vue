<template>
  <span>
    {{ animatedValue }}
  </span>
</template>

<script>
export default {
  name: 'VCounter',
  props: {
    value: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 1000,
    },
    step: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      animatedValue: 0,
      animationInterval: null,
    };
  },
  mounted() {
    const interval = this.step * this.duration / this.value;

    if (interval < 4) {
      console.warn(`The interval needed to render ${this.value} in ${this.duration}ms with a step of ${this.step} is lower than 4. You should consider increasing duration or step.`);
    }

    this.animationInterval = setInterval(() => {
      const result = this.animatedValue + this.step;
      if (result >= this.value) {
        this.animatedValue = this.value;
        clearInterval(this.animationInterval);
      } else {
        this.animatedValue = result;
      }
    }, interval);
  },
};
</script>

<style lang="scss" scoped>

</style>
