import { createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'

import DefaultLayout from './Layouts/Default'
import React from 'react'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
    let page: any = pages[`./Pages/${name}.tsx`]
    page.default.layout = page.default.layout || ((page: any) => <DefaultLayout children={page} />)
    return page
  },
  setup({ el, App, props }) {
    // createRoot(el).render(<App {...props} />)
    hydrateRoot(el, <App {...props} />)
  },
})
