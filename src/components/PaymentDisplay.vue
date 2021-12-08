<template>
  <div>
<!--    <div v-if="show" class="show">Props is true</div>-->
    <div v-if="show" :class="this.$style.show">Props is true</div>
<!--    {{ $attrs }}-->
    <div v-for="(item, index) in items" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  // props: ['show'],
  props: {
    items: {
      type: Array,
      required: true,
      // default: () => [],
    },
    show: {
      type: Boolean,
      default: true,
      // required: true,
    },
  },
};
</script>

<style module>
.show {
  color: red;
}
</style>
