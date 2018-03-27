import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../../App.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App Component', () => {
  test('should be Vue instance', () => {
    const wrapper = shallow(App, {localVue});
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
