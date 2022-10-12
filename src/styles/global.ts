import { createGlobalStyle } from 'styled-components'
import BackGroundImage from '../assets/background.jpg'

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    
    #root {
      margin: 0 auto;
    }
    
    html{
      background: url(${BackGroundImage}) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
`