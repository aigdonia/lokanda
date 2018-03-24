<template lang="pug">
  .hotel
    div.hotel__name {{name}}
    div.hotel__city {{city}}
    div.hotel__price(title='Total Price for 5 nights') {{price}} AED
</template>

<style lang="stylus" scoped>
  .hotel
    width: 30%;
    padding: 5px 10px;
    margin-bottom: 10px;
    background-color: #eee;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 150ms;

    &:hover
      border-color: #33691E;
    &__name
      font-size: 1.3rem;
    &__price
      font-size: 1.4rem;
      margin: 10px 0 0;
    &__city
      color: grey;
</style>

<script>
export default {
  name: 'Hotel',
  props: ['name', 'price', 'city'],
  data() {
    return {
    }
  }
}
</script>

