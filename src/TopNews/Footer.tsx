import './Footer.module.scss'
import newsapi_logo from '../NewsAPI.png'

const Footer = () => {
  return (
    <footer>
      <span>Powered by: </span>
      <img src={newsapi_logo} alt='NewsAPI logo' />
    </footer>
  )
}

export default Footer
