/** @jsxImportSource frog/jsx */

import { Frog } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { vars } from './utils'
import { app as distributor } from './distributor.handler'
import { app as learnmore } from './learnmore.handler'

export const runtime = 'edge'

const app = new Frog({
  basePath: '/api',
  ui: { vars },
})

app.route('/', learnmore).route('/distributor', distributor)

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
