import './Footer.module.scss'
import newsapi_logo from '../news_api.png'

const Footer = () => {
  return (
    <footer>
      <span>Powered by: </span>
      <img src={newsapi_logo} alt='NewsAPI logo' />
    </footer>
  )
}

export default Footer
