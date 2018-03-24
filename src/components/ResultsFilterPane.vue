<template lang="pug">
  #filter-pane
    .filter-group
      input.search-box(type='search', placeholder='Search Hotel')
    .filter-group
      label Price Filter
      input.price-filter(type="range" min="1" max="100" value="50")
</template>

<style lang="stylus">
  #filter-pane
    width: 25%;
    margin-right: 25px;
    padding: 0 15px 0 5px;
    border-right: 1px solid #ccc;

  .filter-group
    margin: 5px 0;
    label
      font-size: 0.9rem;
      color: grey;
      margin: 15px 0;

    input.search-box
      width: 100%;
      font-size: 1rem;
      padding: 5px 8px;
      margin: 3px 0 10px;
      border-radius: 5px;

    input.price-filter
      display: block;
      width: 100%;

</style>

<script>
export default {
  name: 'ResultsFilterPane'
}
</script>
