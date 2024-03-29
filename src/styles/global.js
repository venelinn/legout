import { createGlobalStyle } from 'styled-components'
import './fonts.scss'

export default createGlobalStyle`
  :root {
    --base-color: #0e7ab6;
    --color-dark: #313131;
    --color-light: #444;
    --page-max-width: 850px;
    --custom-ease-1: cubic-bezier(0.475,0.425,0,0.995);
    --custom-ease-2: cubic-bezier(0.835,-0.005,0.06,1);
    --custom-ease-3: cubic-bezier(0.19,1,0.22,1);
    --custom-ease-4: cubic-bezier(0.63,0.03,0.21,1);
    --primary-ease: var(--custom-ease-1);
    --body-font: 'proxima-nova', sans-serif;
    --header-font: 'League Spartan';
  }
`