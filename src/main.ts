import { createApp } from 'vue'
//@ts-ignore
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
  theme:{
    defaultTheme:'anderson',
    themes:{
       anderson:{
        dark:false,
        colors: {
          primary: "#FF0000"
        }
       }
    }
  },
    components,
    directives,
  })

createApp(App).use(vuetify).mount('#app')
