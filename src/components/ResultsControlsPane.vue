<template lang="pug">
  .controls
    div.controls--group
      label Total Nights:
      span {{totalNights}}
    div.controls--group
      button Sort By name
      button Sort by price
</template>

<style lang="stylus">
  .controls
    margin: 15px 5px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--group
      label
        margin-right: 10px;
        color: grey;
      span
        font-weight: bold;
</style>


<script>
export default {
  name: 'ResultsControlsPane',
  computed: {
    totalNights() {
      return this.$store.getters.totalNights;
    }
  }
}
</script>
