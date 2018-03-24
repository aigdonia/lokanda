<template lang="pug">
  div.date-box
    label {{label}}:
    input(type='text', :value='value')
</template>

<style lang="stylus" scoped>
  .date-box
    font-size: 1rem;
    label
      margin-right: 7px;
    input
      border-radius: 5px;
      padding: 8px 5px;
</style>

<script>
import rome from 'rome';
import moment from 'moment';

export default {
  name: 'DateBox',
  props: {
    label: String,
    value: String,
    stateKey: String
  },
  mounted() {
    const dateInput = this.$el.children[1];
    const dateBox = rome(dateInput, {
      time: false,
      monthsInCalendar: 2,
      dateValidator(d){
        const m = moment(d);
        const today = moment().startOf('day');
        return m.isSameOrAfter(today);
      }
    });
    dateBox.on('data', newDate => {

      // should update teh associated state
      console.info(newDate, this.$store.state[this.$props.stateKey]);
    })
  }
}
</script>
