import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faAdd,
  faAddressBook,
  faAt,
  faCalendar,
  faCashRegister,
  faChartBar,
  faCheck,
  faCog,
  faComment,
  faQuestionCircle,
  faSpinner,
  faStar,
  faSwimmer,
  faUsers,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

// ignore the next line, it's just to make the typescript compiler happy
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faAdd,
  faAddressBook,
  faAt,
  faCalendar,
  faCashRegister,
  faChartBar,
  faCheck,
  faCog,
  faComment,
  faQuestionCircle,
  faSpinner,
  faStar,
  faSwimmer,
  faUsers,
  faWrench,
);

library.add(faStarRegular);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon);
});
