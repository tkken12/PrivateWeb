import { constObject } from 'common/const'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href={ constObject["githubPrivateWeb"] }
      className='link footer__link'
    >
      Created By Kim TaeYoung 
    </a>
  </footer>
)

export default Footer
