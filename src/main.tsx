import { render } from 'preact'
import { App } from './app'
import '@unocss/reset/antfu.css'
import 'virtual:uno.css'

render(<App />, document.getElementById('app') as HTMLElement)
