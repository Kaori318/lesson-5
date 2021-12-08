<template>
  <div>
    <button @click="increase">Clicked {{ counter }} times</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter += 1;
      // // eslint-disable-next-line no-plusplus
      // this.counter++;
    },
    clickLogger() {
      console.log('click');
    },
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
    document.addEventListener('click', this.clickLogger);
    // this.$el.addEventListener('click', this.doSomething);
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickLogger);
  },
  destroyed() {
  },
};
</script>
