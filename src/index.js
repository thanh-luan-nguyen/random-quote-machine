import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyling = createGlobalStyle`
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `
const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <GlobalStyling />
    <App />
  </StrictMode>,
  rootElement
)
