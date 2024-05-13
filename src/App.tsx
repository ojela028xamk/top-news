import css from './App.module.scss'
import Articles from './TopNews/Articles'

function App() {
  return (
    <div className={css.App}>
      <h1>Top News</h1>
      <Articles />
    </div>
  )
}

export default App
