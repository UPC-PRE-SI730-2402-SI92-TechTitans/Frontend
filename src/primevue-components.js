import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import InputNumber from 'primevue/inputnumber';
import DatePicker from 'primevue/datepicker';

export default (app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })

  app.component('pv-input-text', InputText)
  app.component('pv-button', Button)
  app.component('pv-card', Card)
  app.component('pv-avatar', Avatar)
  app.component('pv-input-number', InputNumber)
  app.component('pv-date-picker', DatePicker)
}