import css from './App.module.scss'
import Articles from './TopNews/Articles'
import Navigation from './TopNews/Navigation'

function App() {
  return (
    <div className={css.App}>
      <h1>Top News</h1>
      <Navigation />
      <Articles />
    </div>
  )
}

export default App
