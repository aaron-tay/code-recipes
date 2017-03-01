/* globals componentHandler */
import Vue from 'vue';

// This directive can be used adding the 'v-mdl' attribute to an element
// See VueJS documentation (https://vuejs.org/v2/guide/custom-directive.html)
Vue.directive('mdl', {
  // Based on the Vue-Lifecycle, this is triggered when the bound element is inserted into the DOM
  inserted() {
    // https://forum.vuejs.org/topic/1957/how-to-implement-material-design-in-the-vuejs-webpack-template/2
    Vue.nextTick(() => {
      // Upgrade everything in the DOM. Not efficient but good enough
      // If performance is an issue, look into tweaking this
      componentHandler.upgradeDom();
    });
  },
});
