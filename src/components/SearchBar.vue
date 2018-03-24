<template lang="pug">
  section#search-bar
    DateBox(label='From', v-model="checkInDate", stateKey='checkinDate')
    DateBox(label='To', v-model="checkOutDate", stateKey='checkoutDate')
    button.button--search(@click='search()') Search
</template>

<style lang="stylus">
  #search-bar
    margin: 50px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
</style>

<script>
import DateBox from './DateBox';
import { hotelsUri } from '../config.js';
export default {
  name: 'SearchBar',
  components: {
    DateBox
  },
  computed: {
    checkInDate(){
      return this.$store.state.checkinDate
    },
    checkOutDate(){
      return this.$store.state.checkoutDate
    }
  },
  methods: {
    search(){
      console.info(hotelsUri);
    }
  }
}
</script>
