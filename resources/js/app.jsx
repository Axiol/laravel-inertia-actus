import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'

import DefaultLayout from './Layouts/Default'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || (page => <DefaultLayout children={page} />)
    return page
  },
  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
