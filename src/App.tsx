import { useState } from 'react'
import css from './App.module.scss'
import Articles from './TopNews/Articles'
import Navigation from './TopNews/Navigation'
import { Article } from './globalTypes'

function App() {
  const [articles, setArticles] = useState<Article[]>([])

  return (
    <div className={css.App}>
      <h1>Top News</h1>
      <Navigation setArticles={setArticles} />
      <Articles articles={articles} />
    </div>
  )
}

export default App
