import { Categories } from '../globalTypes'
import css from './Navigation.module.scss'
import { useNewsData } from '../AppContainer'

const Navigation = () => {
  const [{ currentCategory, getNews }] = useNewsData()

  const handleCategory = (category: Categories) => {
    if (currentCategory === category) return
    getNews(category)
  }

  return (
    <div className={css.navigation_container}>
      <nav className={css.navigation}>
        {Object.values(Categories).map((category) => (
          <span
            key={category}
            className={category === currentCategory ? `${css.navlink} ${css.active}` : css.navlink}
            onClick={() => handleCategory(category)}
          >
            {category}
          </span>
        ))}
      </nav>
    </div>
  )
}

export default Navigation
