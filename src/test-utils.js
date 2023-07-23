
import {render} from '@testing-library/react'
import { AppProviders } from './components/Providers/App-providers'


const customRender = (ui, options) =>
  render(ui, {wrapper: AppProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}