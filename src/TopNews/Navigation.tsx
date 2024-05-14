import { useState } from 'react'
import { getTopHeadlines } from '../Services/topHeadlineService'
import { Article, Categories, TopHeadlinesResponse } from '../globalTypes'
import css from './Navigation.module.scss'

type NavigationProps = {
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>
}

const Navigation = ({ setArticles }: NavigationProps) => {
  const [currentCategory, setCurrentCategory] = useState<Categories>()

  const handleCategory = (category: Categories) => {
    if (currentCategory === category) return

    setCurrentCategory(category)

    getTopHeadlines(category)
      .then((res) => {
        const response = res as TopHeadlinesResponse
        setArticles(response.articles)
      })
      .catch((err) => console.log(err))
  }

  return (
    <nav className={css.navigation}>
      {Object.values(Categories).map((category) => (
        <span key={category} className={css.navlink} onClick={() => handleCategory(category)}>
          {category}
        </span>
      ))}
    </nav>
  )
}

export default Navigation
