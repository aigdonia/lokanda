import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

const today = moment(new Date());
const dateFormat = "YYYY-MM-DD";

export const store = new Vuex.Store({
  state: {
    checkinDate: today.format(dateFormat),
    checkoutDate: today.add(1,'day').format(dateFormat),
    hotels: [],
    _fetchedHotels: [] // all the hotels from the json
  },
  getters: {
    totalNights(state) {
      const endDate = moment(state.checkoutDate);
      const startDate = moment(state.checkinDate);
      console.info(endDate.diff(startDate, 'days'));
      return endDate.diff(startDate, 'days');
    }
  }
});
