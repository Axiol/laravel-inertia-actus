import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'

import DefaultLayout from './Layouts/Default.js'
import React from 'react'

createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
      let page: any = pages[`./Pages/${name}.tsx`]
      page.default.layout = page.default.layout || ((page: any) => <DefaultLayout children={page} />)
      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
)
