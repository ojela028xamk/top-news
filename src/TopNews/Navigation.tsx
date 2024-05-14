import { Categories } from '../globalTypes'
import css from './Navbar.module.scss'

const Navigation = () => {
  return (
    <nav className={css.navbar}>
      {Object.values(Categories).map((category) => (
        <span className={css.navlink}>{category}</span>
      ))}
    </nav>
  )
}

export default Navigation
