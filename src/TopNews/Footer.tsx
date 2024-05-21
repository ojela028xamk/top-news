import css from './Footer.module.scss'
import newsapi_logo from '../NewsAPI.png'

const Footer = () => {
  return (
    <div className={css.footer}>
      <span>Powered by: </span>
      <img src={newsapi_logo} alt='NewsAPI logo' />
    </div>
  )
}

export default Footer
