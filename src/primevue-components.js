import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Button from 'primevue/button'

export default (app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })

  app.component('pv-button', Button)
}
