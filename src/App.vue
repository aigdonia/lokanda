<template lang="pug">
  section#app
    SearchBar
    SearchResultsPane
</template>


<script>
import SearchBar from './components/SearchBar.vue';
import SearchResultsPane from './components/SearchResults.vue';

export default {
  name: 'app',
  components: {
    SearchBar,
    SearchResultsPane
  }
}
</script>

<style lang='stylus'>
  @import '../node_modules/rome/src/rome.styl';
  textarea:focus, input:focus{
    outline: none;
  }

  #app
    margin: 0 150px;
    font: 16px 'Roboto';

    input[type=search],
    input[type=text]
      border: 1px solid #666;
      &:focus
        border-color: #333;

    button
      border: 1px solid #33691E;
      background-color: #C5E1A5;
      border-radius: 2px;
      padding: 5px 15px;
      font-size: 0.8rem;
      margin: 0 5px;
      cursor: pointer;
      &.button
        &--search
          padding: 5px 25px;
          font-size: 1.2rem;
          color: white;
          border-color: #33691E
          background-color: #689F38;
</style>
