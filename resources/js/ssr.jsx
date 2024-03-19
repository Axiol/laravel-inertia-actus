import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'

import DefaultLayout from './Layouts/Default'

createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
      let page = pages[`./Pages/${name}.jsx`]
      page.default.layout = page.default.layout || (page => <DefaultLayout children={page} />)
      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
)
