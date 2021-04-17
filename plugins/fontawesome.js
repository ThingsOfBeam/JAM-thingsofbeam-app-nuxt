import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faFacebookF,
  faLine,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faExclamationCircle)
library.add(faFacebookSquare, faFacebookF, faLine, faTwitter, faGithub)
library.add(faSun, farMoon)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
