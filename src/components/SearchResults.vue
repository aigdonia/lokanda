<template lang="pug">
  #search-results
    ResultsFilterPane
    #results
      ResultsControlsPane
      .hotels
        Hotel(name='Ramsis', price='125', city='Dubai')
        Hotel(name='NileRitz Carlton', price='450', city='Cairo')
        Hotel(name='Hilton Cairo', price='730', city='Los Angles')
        Hotel(name='Holiday Inn', price='900', city='Istanbul')
</template>

<style lang="stylus">
    #search-results
      display: flex;
      #results
        flex-grow: 1;

        .hotels
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
</style>

<script>
import ResultsFilterPane from './ResultsFilterPane.vue';
import ResultsControlsPane from './ResultsControlsPane.vue';
import Hotel from './Hotel';

export default {
  name: 'SearchResultsPane',
  components: {
    ResultsFilterPane,
    ResultsControlsPane,
    Hotel
  }
}
</script>
